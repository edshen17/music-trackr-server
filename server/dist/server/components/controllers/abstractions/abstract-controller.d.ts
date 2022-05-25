import { IUseCase } from '../../use-cases/abstractions/i-use-case';
import { IHttpRequest } from '../../web-driver-callbacks/express/abstractions/i-http-request';
import { ControllerResponse, IController } from './i-controller';
declare type ControllerParams = {
    successStatusCode: number;
    errorStatusCode: number;
};
declare abstract class AbstractController<UseCaseResponse> implements IController<UseCaseResponse> {
    protected _useCase: IUseCase<any, UseCaseResponse>;
    protected _successStatusCode: number;
    protected _errorStatusCode: number;
    constructor(props: ControllerParams);
    makeRequest: (httpRequest: IHttpRequest) => Promise<ControllerResponse<UseCaseResponse>>;
    private _getUseCaseRes;
    init: (props: {
        makeUseCase: Promise<IUseCase<any, UseCaseResponse>>;
    }) => Promise<this>;
}
export { AbstractController, ControllerParams };
