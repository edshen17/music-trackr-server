"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerDataBuilder = void 0;
class ControllerDataBuilder {
    _userData;
    _routeData;
    constructor() {
        this._setDefaultProperties();
    }
    _setDefaultProperties = () => {
        this._userData = {};
        this._routeData = {
            params: {},
            body: {},
            query: {},
            path: '',
            headers: {},
            cookies: {},
            req: {},
        };
    };
    userData = (userData) => {
        this._userData = userData;
        return this;
    };
    routeData = (routeData) => {
        this._routeData = routeData;
        return this;
    };
    build = () => {
        const controllerData = {
            userData: this._userData,
            routeData: this._routeData,
        };
        this._setDefaultProperties();
        return controllerData;
    };
}
exports.ControllerDataBuilder = ControllerDataBuilder;
