"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieCallbackDecorator = void 0;
const abstract_express_callback_1 = require("../abstractions/abstract-express-callback");
class CookieCallbackDecorator extends abstract_express_callback_1.AbstractExpressCallback {
    abstractExpressCallback;
    constructor(abstractExpressCallback) {
        super();
        this.abstractExpressCallback = abstractExpressCallback;
    }
    consumeTemplate = (res, body) => {
        if (body && body.cookies) {
            const { cookies } = body;
            for (const cookie of cookies) {
                const { name, value, options } = cookie;
                res.cookie(name, value, options);
            }
            this.abstractExpressCallback.consumeTemplate(res, body);
        }
    };
}
exports.CookieCallbackDecorator = CookieCallbackDecorator;
