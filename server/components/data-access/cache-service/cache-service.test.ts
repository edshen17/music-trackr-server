import { expect } from 'chai';
import { makeCacheService } from '.';
import { CacheService, CACHE_TTL } from './cache-service';

let cacheService: CacheService;

let hashKey: string;
let value: {};

before(async () => {
  cacheService = await makeCacheService;
});

beforeEach(async () => {
  hashKey = 'users';
  value = [
    {
      name: 'some name',
      createdDate: new Date(),
      settings: { isSubscribed: true },
      badges: ['pro'],
    },
  ];
  await cacheService.set({
    hashKey,
    key: 'someUserId',
    value,
    ttl: CACHE_TTL.DAY,
  });
});

describe('cacheDbService', () => {
  describe('set', () => {
    it('should set an item in the cache', async () => {
      const value = { name: 'some other name' };
      const storedItem = await cacheService.set({
        hashKey,
        key: 'someOtherUserId',
        value,
        ttl: CACHE_TTL.DAY,
      });
      expect(storedItem).to.deep.equal(value);
    });
  });
  describe('get', () => {
    it('should get the item in the cache', async () => {
      const storedItem = await cacheService.get({ hashKey, key: 'someUserId' });
      expect(storedItem).to.deep.equal(value);
    });
    it('should return null if item not found', async () => {
      const storedItem = await cacheService.get({ hashKey, key: 'nonExistingId' });
      expect(storedItem).to.equal(null);
    });
  });
  describe('clearKey', () => {
    it("should clear the given key's value", async () => {
      await cacheService.clearKey({ hashKey, key: 'someUserId' });
      const storedItem = await cacheService.get({ hashKey, key: 'someUserId' });
      expect(storedItem).to.equal(null);
    });
  });
  describe('clearHashKey', () => {
    it("should clear the given hashKey's value", async () => {
      await cacheService.clearHashKey(hashKey);
      const storedItem = await cacheService.get({ hashKey, key: 'someUserId' });
      expect(storedItem).to.equal(null);
    });
  });
});
