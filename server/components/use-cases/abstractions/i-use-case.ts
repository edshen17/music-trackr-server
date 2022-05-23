import { CacheService } from '../../data-access/cache-service/cache-service';
import { AbstractEntityValidator } from '../../validators/abstractions/abstract-entity-validator';
import { AbstractQueryValidator } from '../../validators/abstractions/abstract-query-validator';
import {
  IHttpRequest,
  UserData,
} from '../../web-driver-callbacks/express/abstractions/i-http-request';

type ControllerData = {
  routeData: RouteData;
  userData: UserData;
};

type RouteData = Omit<IHttpRequest, 'userData'>;

type UseCaseInitParams<OptionalUseCaseInitParams> = RequiredUseCaseInitParams &
  OptionalUseCaseInitParams;

type RequiredUseCaseInitParams = {
  makeQueryValidator: AbstractQueryValidator;
  makeCacheService: Promise<CacheService>;
};

interface IUseCase<OptionalUseCaseInitParams, UseCaseResponse> {
  makeRequest: (controllerData: ControllerData) => Promise<UseCaseResponse>;
  init: (useCaseInitParams: UseCaseInitParams<OptionalUseCaseInitParams>) => Promise<this>;
}

export { ControllerData, IUseCase, RouteData, UseCaseInitParams };
