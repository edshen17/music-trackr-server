import { IUseCase } from '../../use-cases/abstractions/i-use-case';
import { IHttpRequest } from '../../web-driver-callbacks/express/abstractions/i-http-request';
import { ControllerResponse, IController } from './i-controller';

type ControllerParams = { successStatusCode: number; errorStatusCode: number };

abstract class AbstractController<UseCaseResponse> implements IController<UseCaseResponse> {
  protected _useCase!: IUseCase<any, UseCaseResponse>;
  protected _successStatusCode!: number;
  protected _errorStatusCode!: number;

  constructor(props: ControllerParams) {
    const { successStatusCode, errorStatusCode } = props;
    this._successStatusCode = successStatusCode;
    this._errorStatusCode = errorStatusCode;
  }

  public makeRequest = async (
    httpRequest: IHttpRequest
  ): Promise<ControllerResponse<UseCaseResponse>> => {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const useCaseRes = await this._getUseCaseRes(httpRequest);
      return {
        headers,
        statusCode: this._successStatusCode,
        body: useCaseRes,
      };
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : 'An error occurred.';
      return {
        headers,
        statusCode: this._errorStatusCode,
        body: { error },
      };
    }
  };

  private _getUseCaseRes = async (httpRequest: IHttpRequest): Promise<UseCaseResponse> => {
    const { path, params, body, query, headers, cookies, req, userData } = httpRequest;
    const controllerData = {
      routeData: {
        params,
        body,
        query,
        path,
        headers,
        cookies,
        req,
      },
      userData,
    };
    const useCaseRes = await this._useCase.makeRequest(controllerData);
    return useCaseRes;
  };

  public init = async (props: { makeUseCase: Promise<IUseCase<any, UseCaseResponse>> }) => {
    const { makeUseCase } = props;
    this._useCase = await makeUseCase;
    return this;
  };
}

export { AbstractController, ControllerParams };
