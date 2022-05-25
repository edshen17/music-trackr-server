"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectCallbackDecorator = void 0;
const abstract_express_callback_1 = require("../abstractions/abstract-express-callback");
class RedirectCallbackDecorator extends abstract_express_callback_1.AbstractExpressCallback {
    abstractExpressCallback;
    constructor(abstractExpressCallback) {
        super();
        this.abstractExpressCallback = abstractExpressCallback;
    }
    consumeTemplate = (res, body) => {
        this.abstractExpressCallback.consumeTemplate(res, body);
        if (!(body && 'redirectUrl' in body)) {
            throw new Error('Redirect url is not set. Make sure body has a redirectUrl property.');
        }
        const { redirectUrl } = body;
        return res.redirect(redirectUrl);
    };
}
exports.RedirectCallbackDecorator = RedirectCallbackDecorator;
