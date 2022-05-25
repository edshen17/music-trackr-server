import { IUseCase } from '../../use-cases/abstractions/i-use-case';
import { IHttpRequest } from '../../web-driver-callbacks/express/abstractions/i-http-request';
declare type ControllerResponse<UseCaseResponse> = {
    headers: {};
    statusCode: number;
    body: UseCaseResponse | {
        error: string;
    };
};
interface IController<UseCaseResponse> {
    makeRequest: (httpRequest: IHttpRequest) => Promise<ControllerResponse<UseCaseResponse>>;
    init: (props: {
        makeUseCase: Promise<IUseCase<any, UseCaseResponse>>;
    }) => Promise<this>;
}
export { ControllerResponse, IController };
