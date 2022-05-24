import dayjs from 'dayjs';
import { RedisClientType } from 'redis';
import { StringKeyObject } from '../../../types/custom';

type CacheServiceInitParams = {
  redisClient: RedisClientType;
  dayjs: typeof dayjs;
};

enum CACHE_TTL {
  WEEK = 24 * 60 * 60 * 7,
  DAY = 24 * 60 * 60,
  HOUR = 60 * 60,
}

enum MODEL_NAME {
  AUDIO_UPLOAD = 'audioUpload',
}

class CacheService {
  private _redisClient!: RedisClientType;
  private _dayjs!: typeof dayjs;

  public set = async (props: {
    hashKey: string;
    key: string;
    value: StringKeyObject;
    ttl?: CACHE_TTL;
  }): Promise<StringKeyObject> => {
    const { hashKey, key, value, ttl } = props;
    await this._redisClient.hSet(hashKey, key, JSON.stringify(value));
    if (ttl) {
      this._redisClient.expire(hashKey, ttl);
    }
    return value;
  };

  public get = async (props: { hashKey: string; key: string }): Promise<StringKeyObject | null> => {
    const { hashKey, key } = props;
    const value = await this._redisClient.hGet(hashKey, key);
    const storedValue = this._convertStrToJson(JSON.parse(value!));
    return storedValue;
  };

  private _convertStrToJson = (obj: StringKeyObject): StringKeyObject => {
    const isObject = this._isObject(obj);
    const isArray = Array.isArray(obj);
    if (isObject) {
      return this._convertStrToObj(obj);
    } else if (isArray) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = this._convertStrToObj(obj[i]);
      }
      return obj;
    } else {
      return obj;
    }
  };

  private _isObject = (obj: any): boolean => {
    const isObject = !!obj && obj.constructor === Object;
    return isObject;
  };

  private _convertStrToObj = (obj: StringKeyObject): StringKeyObject => {
    for (const property in obj) {
      const value = obj[property];
      const isObject = this._isObject(value);
      const isArray = Array.isArray(value);
      if (isObject) {
        this._convertStrToJson(value);
      } else if (isArray) {
        obj[property] = value.map((embeddedObj: StringKeyObject) => {
          return this._convertStrToJson(embeddedObj);
        });
      } else {
        const isDateStr = this._isDateStr(value);
        if (isDateStr) {
          obj[property] = new Date(value);
        }
      }
    }
    return obj;
  };

  private _isDateStr = (value: any): boolean => {
    const isStr = typeof value === 'string';
    const isDate = isStr && this._dayjs(value).isValid();
    return isDate;
  };

  public clearKey = async (props: { hashKey: string; key: string }): Promise<void> => {
    const { hashKey, key } = props;
    await this._redisClient.hDel(hashKey, key);
  };

  public clearHashKey = async (hashKey: string): Promise<void> => {
    await this._redisClient.del(hashKey);
  };

  public init = async (props: CacheServiceInitParams) => {
    const { redisClient, dayjs } = props;
    this._redisClient = redisClient;
    this._dayjs = dayjs;
    await this._redisClient.connect();
    return this;
  };
}

export { CacheService, CACHE_TTL, MODEL_NAME };
