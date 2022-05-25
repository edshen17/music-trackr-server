"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTestFixture = void 0;
const cache_service_1 = require("../../data-access/cache-service/cache-service");
class AbstractTestFixture {
    _entity;
    _cacheService;
    _modelName;
    createMockData = async (buildParams) => {
        const mockBuildParams = buildParams || (await this._createMockBuildParams());
        const mockEntity = await this._entity.build(mockBuildParams);
        const mockData = await this._cacheService.set({
            hashKey: this._modelName,
            key: mockEntity._id,
            value: mockEntity,
            ttl: cache_service_1.CACHE_TTL.DAY,
        });
        return mockData;
    };
    init = async (initParams) => {
        const { makeEntity, makeCacheService, modelName, ...optionalInitParams } = initParams;
        this._entity = await makeEntity;
        this._cacheService = await makeCacheService;
        this._modelName = modelName;
        await this._initTemplate(optionalInitParams);
        return this;
    };
    _initTemplate = async (optionalInitParams) => {
        return;
    };
}
exports.AbstractTestFixture = AbstractTestFixture;
