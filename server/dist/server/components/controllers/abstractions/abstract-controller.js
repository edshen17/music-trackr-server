"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractController = void 0;
class AbstractController {
    _useCase;
    _successStatusCode;
    _errorStatusCode;
    constructor(props) {
        const { successStatusCode, errorStatusCode } = props;
        this._successStatusCode = successStatusCode;
        this._errorStatusCode = errorStatusCode;
    }
    makeRequest = async (httpRequest) => {
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
        }
        catch (err) {
            const error = err instanceof Error ? err.message : 'An error occurred.';
            return {
                headers,
                statusCode: this._errorStatusCode,
                body: { error },
            };
        }
    };
    _getUseCaseRes = async (httpRequest) => {
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
    init = async (props) => {
        const { makeUseCase } = props;
        this._useCase = await makeUseCase;
        return this;
    };
}
exports.AbstractController = AbstractController;
