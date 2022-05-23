import { Request } from 'express';
import { StringKeyObject } from '../../../../types/custom';
import {
  IHttpRequest,
  UserData,
} from '../../../web-driver-callbacks/express/abstractions/i-http-request';

class IHttpRequestBuilder {
  private _body!: {};
  private _path!: string;
  private _query!: {};
  private _params!: {};
  private _userData!: UserData;
  private _headers!: {};
  private _cookies!: {};
  private _req!: {};

  constructor() {
    this._setDefaultProperties();
  }

  private _setDefaultProperties = () => {
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

  public body = (body: {}): this => {
    this._body = body;
    return this;
  };

  public path = (path: string): this => {
    this._path = path;
    return this;
  };

  public query = (query: {}): this => {
    this._query = query;
    return this;
  };

  public params = (params: {}): this => {
    this._params = params;
    return this;
  };

  public headers = (params: {}): this => {
    this._headers = params;
    return this;
  };

  public userData = (userData: UserData): this => {
    this._userData = userData;
    return this;
  };

  public cookies = (cookies: StringKeyObject): this => {
    this._cookies = cookies;
    return this;
  };

  public req = (req: Request): this => {
    this._req = req;
    return this;
  };

  public build = (): IHttpRequest => {
    const iHttpRequest: IHttpRequest = {
      body: this._body,
      path: this._path,
      query: this._query,
      params: this._params,
      userData: this._userData,
      headers: this._headers,
      cookies: this._cookies,
      req: <Request>this._req,
    };
    this._setDefaultProperties();
    return iHttpRequest;
  };
}

export { IHttpRequestBuilder };
