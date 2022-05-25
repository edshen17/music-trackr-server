"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractExpressCallback = void 0;
class AbstractExpressCallback {
    consume = (makeController) => {
        return async (req, res) => {
            try {
                const httpRequest = this._createHttpRequest(req);
                const controller = await makeController;
                const httpResponse = await controller.makeRequest(httpRequest);
                const { headers, statusCode, body } = httpResponse;
                if (headers) {
                    res.set(headers);
                }
                res.status(statusCode);
                if ('error' in body) {
                    res.json(body);
                }
                else {
                    this.consumeTemplate(res, body);
                }
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send({ error: err.message });
                }
            }
        };
    };
    _createHttpRequest = (req) => {
        const { body, query, params, originalUrl, headers, cookies } = req;
        const httpRequest = {
            body,
            path: originalUrl,
            query,
            params,
            headers,
            cookies,
            userData: {},
            req,
        };
        return httpRequest;
    };
}
exports.AbstractExpressCallback = AbstractExpressCallback;
