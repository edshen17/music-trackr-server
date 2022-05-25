import { CacheService } from '../../data-access/cache-service/cache-service';
import { AbstractQueryValidator } from '../../validators/abstractions/abstract-query-validator';
import { IHttpRequest, UserData } from '../../web-driver-callbacks/express/abstractions/i-http-request';
declare type ControllerData = {
    routeData: RouteData;
    userData: UserData;
};
declare type RouteData = Omit<IHttpRequest, 'userData'>;
declare type UseCaseInitParams<OptionalUseCaseInitParams> = RequiredUseCaseInitParams & OptionalUseCaseInitParams;
declare type RequiredUseCaseInitParams = {
    makeQueryValidator: AbstractQueryValidator;
    makeCacheService: Promise<CacheService>;
};
interface IUseCase<OptionalUseCaseInitParams, UseCaseResponse> {
    makeRequest: (controllerData: ControllerData) => Promise<UseCaseResponse>;
    init: (useCaseInitParams: UseCaseInitParams<OptionalUseCaseInitParams>) => Promise<this>;
}
export { ControllerData, IUseCase, RouteData, UseCaseInitParams };
