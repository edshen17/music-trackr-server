import dayjs from 'dayjs';
import { RedisClientType } from 'redis';
import { StringKeyObject } from '../../../types/custom';
declare type CacheServiceInitParams = {
    redisClient: RedisClientType;
    dayjs: typeof dayjs;
};
declare enum CACHE_TTL {
    WEEK = 604800,
    DAY = 86400,
    HOUR = 3600
}
declare enum MODEL_NAME {
    AUDIO_UPLOAD = "audioUpload"
}
declare class CacheService {
    private _redisClient;
    private _dayjs;
    set: (props: {
        hashKey: string;
        key: string;
        value: StringKeyObject;
        ttl?: CACHE_TTL;
    }) => Promise<StringKeyObject>;
    get: (props: {
        hashKey: string;
        key: string;
    }) => Promise<StringKeyObject | null>;
    private _convertStrToJson;
    private _isObject;
    private _convertStrToObj;
    private _isDateStr;
    clearKey: (props: {
        hashKey: string;
        key: string;
    }) => Promise<void>;
    clearHashKey: (hashKey: string) => Promise<void>;
    init: (props: CacheServiceInitParams) => Promise<this>;
}
export { CacheService, CACHE_TTL, MODEL_NAME };
