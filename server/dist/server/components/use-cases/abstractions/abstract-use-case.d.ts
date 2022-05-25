import { CacheService } from '../../data-access/cache-service/cache-service';
import { AbstractQueryValidator } from '../../validators/abstractions/abstract-query-validator';
import { ControllerData, IUseCase, UseCaseInitParams } from './i-use-case';
declare abstract class AbstractUseCase<OptionalUseCaseInitParams, UseCaseResponse> implements IUseCase<OptionalUseCaseInitParams, UseCaseResponse> {
    protected _queryValidator: AbstractQueryValidator;
    protected _cacheService: CacheService;
    makeRequest: (controllerData: ControllerData) => Promise<UseCaseResponse>;
    protected abstract _makeRequestTemplate(props: ControllerData): Promise<UseCaseResponse>;
    private _validateQuery;
    init: (initParams: UseCaseInitParams<OptionalUseCaseInitParams>) => Promise<this>;
    protected _initTemplate: (optionalInitParams: Omit<UseCaseInitParams<OptionalUseCaseInitParams>, 'makeQueryValidator' | 'makeCacheService'>) => Promise<void>;
}
export { AbstractUseCase };
