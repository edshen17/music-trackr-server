const IS_PRODUCTION = process.env.NODE_ENV == 'production';
const REDIS_URL = process.env.REDIS_URL;
const REDIS_URL_DEV = process.env.REDIS_URL_DEV;
const EXPRESS_PORT = process.env.EXPRESS_PORT;

export { IS_PRODUCTION, REDIS_URL, REDIS_URL_DEV, EXPRESS_PORT };
