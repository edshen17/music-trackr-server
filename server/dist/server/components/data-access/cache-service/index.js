"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCacheService = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const redis_1 = require("redis");
const constants_1 = require("../../../constants");
const cache_service_1 = require("./cache-service");
const url = constants_1.IS_PRODUCTION ? constants_1.REDIS_URL : constants_1.REDIS_URL_DEV;
const redisClient = (0, redis_1.createClient)({
    url,
});
const makeCacheService = new cache_service_1.CacheService().init({
    redisClient,
    dayjs: dayjs_1.default,
});
exports.makeCacheService = makeCacheService;
