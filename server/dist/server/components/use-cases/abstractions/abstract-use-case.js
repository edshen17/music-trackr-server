"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractUseCase = void 0;
class AbstractUseCase {
    _queryValidator;
    _cacheService;
    makeRequest = async (controllerData) => {
        this._validateQuery(controllerData);
        const useCaseRes = await this._makeRequestTemplate(controllerData);
        return useCaseRes;
    };
    _validateQuery = (controllerData) => {
        const { routeData } = controllerData;
        const { query } = routeData;
        routeData.query = this._queryValidator.validate({ query });
    };
    init = async (initParams) => {
        const { makeQueryValidator, makeCacheService, ...optionalInitParams } = initParams;
        this._queryValidator = makeQueryValidator;
        this._cacheService = await makeCacheService;
        await this._initTemplate(optionalInitParams);
        return this;
    };
    _initTemplate = async (optionalInitParams) => {
        return;
    };
}
exports.AbstractUseCase = AbstractUseCase;
