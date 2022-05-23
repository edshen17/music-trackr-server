import { Request } from 'express';
import { UserData } from '../../../web-driver-callbacks/express/abstractions/i-http-request';
import { ControllerData, RouteData } from '../../abstractions/i-use-case';

class ControllerDataBuilder {
  private _userData!: UserData;
  private _routeData!: RouteData;
  constructor() {
    this._setDefaultProperties();
  }

  private _setDefaultProperties = () => {
    this._userData = {};
    this._routeData = {
      params: {},
      body: {},
      query: {},
      path: '',
      headers: {},
      cookies: {},
      req: {} as Request,
    };
  };

  public userData = (userData: UserData): this => {
    this._userData = userData;
    return this;
  };

  public routeData = (routeData: RouteData): this => {
    this._routeData = routeData;
    return this;
  };

  public build = (): ControllerData => {
    const controllerData: ControllerData = {
      userData: this._userData,
      routeData: this._routeData,
    };
    this._setDefaultProperties();
    return controllerData;
  };
}

export { ControllerDataBuilder };
