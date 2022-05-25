"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODEL_NAME = exports.CACHE_TTL = exports.CacheService = void 0;
var CACHE_TTL;
(function (CACHE_TTL) {
    CACHE_TTL[CACHE_TTL["WEEK"] = 604800] = "WEEK";
    CACHE_TTL[CACHE_TTL["DAY"] = 86400] = "DAY";
    CACHE_TTL[CACHE_TTL["HOUR"] = 3600] = "HOUR";
})(CACHE_TTL || (CACHE_TTL = {}));
exports.CACHE_TTL = CACHE_TTL;
var MODEL_NAME;
(function (MODEL_NAME) {
    MODEL_NAME["AUDIO_UPLOAD"] = "audioUpload";
})(MODEL_NAME || (MODEL_NAME = {}));
exports.MODEL_NAME = MODEL_NAME;
class CacheService {
    _redisClient;
    _dayjs;
    set = async (props) => {
        const { hashKey, key, value, ttl } = props;
        await this._redisClient.hSet(hashKey, key, JSON.stringify(value));
        if (ttl) {
            this._redisClient.expire(hashKey, ttl);
        }
        return value;
    };
    get = async (props) => {
        const { hashKey, key } = props;
        const value = await this._redisClient.hGet(hashKey, key);
        const storedValue = this._convertStrToJson(JSON.parse(value));
        return storedValue;
    };
    _convertStrToJson = (obj) => {
        const isObject = this._isObject(obj);
        const isArray = Array.isArray(obj);
        if (isObject) {
            return this._convertStrToObj(obj);
        }
        else if (isArray) {
            for (let i = 0; i < obj.length; i++) {
                obj[i] = this._convertStrToObj(obj[i]);
            }
            return obj;
        }
        else {
            return obj;
        }
    };
    _isObject = (obj) => {
        const isObject = !!obj && obj.constructor === Object;
        return isObject;
    };
    _convertStrToObj = (obj) => {
        for (const property in obj) {
            const value = obj[property];
            const isObject = this._isObject(value);
            const isArray = Array.isArray(value);
            if (isObject) {
                this._convertStrToJson(value);
            }
            else if (isArray) {
                obj[property] = value.map((embeddedObj) => {
                    return this._convertStrToJson(embeddedObj);
                });
            }
            else {
                const isDateStr = this._isDateStr(value);
                if (isDateStr) {
                    obj[property] = new Date(value);
                }
            }
        }
        return obj;
    };
    _isDateStr = (value) => {
        const isStr = typeof value === 'string';
        const isDate = isStr && this._dayjs(value).isValid();
        return isDate;
    };
    clearKey = async (props) => {
        const { hashKey, key } = props;
        await this._redisClient.hDel(hashKey, key);
    };
    clearHashKey = async (hashKey) => {
        await this._redisClient.del(hashKey);
    };
    init = async (props) => {
        const { redisClient, dayjs } = props;
        this._redisClient = redisClient;
        this._dayjs = dayjs;
        await this._redisClient.connect();
        return this;
    };
}
exports.CacheService = CacheService;
