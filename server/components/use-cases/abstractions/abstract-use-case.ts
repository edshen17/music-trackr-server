import { CacheService } from '../../data-access/cache-service/cache-service';
import { AbstractEntityValidator } from '../../validators/abstractions/abstract-entity-validator';
import { AbstractQueryValidator } from '../../validators/abstractions/abstract-query-validator';
import { ControllerData, IUseCase, UseCaseInitParams } from './i-use-case';

abstract class AbstractUseCase<OptionalUseCaseInitParams, UseCaseResponse>
  implements IUseCase<OptionalUseCaseInitParams, UseCaseResponse>
{
  protected _queryValidator!: AbstractQueryValidator;
  protected _cacheService!: CacheService;

  public makeRequest = async (controllerData: ControllerData): Promise<UseCaseResponse> => {
    this._validateQuery(controllerData);
    const useCaseRes = await this._makeRequestTemplate(controllerData);
    return useCaseRes;
  };

  protected abstract _makeRequestTemplate(props: ControllerData): Promise<UseCaseResponse>;

  private _validateQuery = (controllerData: ControllerData): void => {
    const { routeData } = controllerData;
    const { query } = routeData;
    routeData.query = this._queryValidator.validate({ query });
  };

  public init = async (initParams: UseCaseInitParams<OptionalUseCaseInitParams>) => {
    const { makeQueryValidator, makeCacheService, ...optionalInitParams } = initParams;
    this._queryValidator = makeQueryValidator;
    this._cacheService = await makeCacheService;
    await this._initTemplate(optionalInitParams);
    return this;
  };

  protected _initTemplate = async (
    optionalInitParams: Omit<
      UseCaseInitParams<OptionalUseCaseInitParams>,
      'makeQueryValidator' | 'makeCacheService'
    >
  ): Promise<void> => {
    return;
  };
}

export { AbstractUseCase };
