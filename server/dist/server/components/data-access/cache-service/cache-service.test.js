"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
const cache_service_1 = require("./cache-service");
let cacheService;
let hashKey;
let value;
before(async () => {
    cacheService = await _1.makeCacheService;
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
        ttl: cache_service_1.CACHE_TTL.DAY,
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
                ttl: cache_service_1.CACHE_TTL.DAY,
            });
            (0, chai_1.expect)(storedItem).to.deep.equal(value);
        });
    });
    describe('get', () => {
        it('should get the item in the cache', async () => {
            const storedItem = await cacheService.get({ hashKey, key: 'someUserId' });
            (0, chai_1.expect)(storedItem).to.deep.equal(value);
        });
        it('should return null if item not found', async () => {
            const storedItem = await cacheService.get({ hashKey, key: 'nonExistingId' });
            (0, chai_1.expect)(storedItem).to.equal(null);
        });
    });
    describe('clearKey', () => {
        it("should clear the given key's value", async () => {
            await cacheService.clearKey({ hashKey, key: 'someUserId' });
            const storedItem = await cacheService.get({ hashKey, key: 'someUserId' });
            (0, chai_1.expect)(storedItem).to.equal(null);
        });
    });
    describe('clearHashKey', () => {
        it("should clear the given hashKey's value", async () => {
            await cacheService.clearHashKey(hashKey);
            const storedItem = await cacheService.get({ hashKey, key: 'someUserId' });
            (0, chai_1.expect)(storedItem).to.equal(null);
        });
    });
});
