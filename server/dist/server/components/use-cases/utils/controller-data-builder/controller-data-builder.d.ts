import { UserData } from '../../../web-driver-callbacks/express/abstractions/i-http-request';
import { ControllerData, RouteData } from '../../abstractions/i-use-case';
declare class ControllerDataBuilder {
    private _userData;
    private _routeData;
    constructor();
    private _setDefaultProperties;
    userData: (userData: UserData) => this;
    routeData: (routeData: RouteData) => this;
    build: () => ControllerData;
}
export { ControllerDataBuilder };
