"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHttpRequestBuilder = void 0;
class IHttpRequestBuilder {
    _body;
    _path;
    _query;
    _params;
    _userData;
    _headers;
    _cookies;
    _req;
    constructor() {
        this._setDefaultProperties();
    }
    _setDefaultProperties = () => {
        this._body = {};
        this._path = '';
        this._query = {};
        this._params = {};
        this._userData = {
            id: undefined,
            token: undefined,
        };
        this._headers = {};
        this._cookies = {};
        this._req = {};
    };
    body = (body) => {
        this._body = body;
        return this;
    };
    path = (path) => {
        this._path = path;
        return this;
    };
    query = (query) => {
        this._query = query;
        return this;
    };
    params = (params) => {
        this._params = params;
        return this;
    };
    headers = (params) => {
        this._headers = params;
        return this;
    };
    userData = (userData) => {
        this._userData = userData;
        return this;
    };
    cookies = (cookies) => {
        this._cookies = cookies;
        return this;
    };
    req = (req) => {
        this._req = req;
        return this;
    };
    build = () => {
        const iHttpRequest = {
            body: this._body,
            path: this._path,
            query: this._query,
            params: this._params,
            userData: this._userData,
            headers: this._headers,
            cookies: this._cookies,
            req: this._req,
        };
        this._setDefaultProperties();
        return iHttpRequest;
    };
}
exports.IHttpRequestBuilder = IHttpRequestBuilder;
