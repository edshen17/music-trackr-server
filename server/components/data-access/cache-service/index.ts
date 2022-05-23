import dayjs from 'dayjs';
import { createClient, RedisClientType } from 'redis';
import { IS_PRODUCTION, REDIS_URL, REDIS_URL_DEV } from '../../../constants';
import { CacheService } from './cache-service';

const url = IS_PRODUCTION ? REDIS_URL : REDIS_URL_DEV;

const redisClient = createClient({
  url,
}) as RedisClientType;

const makeCacheService = new CacheService().init({
  redisClient,
  dayjs,
});

export { makeCacheService };
