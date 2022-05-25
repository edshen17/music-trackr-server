import { Request } from 'express';
import { StringKeyObject } from '../../../../types/custom';
import { IHttpRequest, UserData } from '../../../web-driver-callbacks/express/abstractions/i-http-request';
declare class IHttpRequestBuilder {
    private _body;
    private _path;
    private _query;
    private _params;
    private _userData;
    private _headers;
    private _cookies;
    private _req;
    constructor();
    private _setDefaultProperties;
    body: (body: {}) => this;
    path: (path: string) => this;
    query: (query: {}) => this;
    params: (params: {}) => this;
    headers: (params: {}) => this;
    userData: (userData: UserData) => this;
    cookies: (cookies: StringKeyObject) => this;
    req: (req: Request) => this;
    build: () => IHttpRequest;
}
export { IHttpRequestBuilder };
