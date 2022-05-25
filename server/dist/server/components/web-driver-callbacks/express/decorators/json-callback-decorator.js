"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonCallbackDecorator = void 0;
const abstract_express_callback_1 = require("../abstractions/abstract-express-callback");
class JsonCallbackDecorator extends abstract_express_callback_1.AbstractExpressCallback {
    abstractExpressCallback;
    constructor(abstractExpressCallback) {
        super();
        this.abstractExpressCallback = abstractExpressCallback;
    }
    consumeTemplate = (res, body) => {
        this.abstractExpressCallback.consumeTemplate(res, body);
        const { cookies, ...filteredBody } = body;
        res.json(filteredBody);
    };
}
exports.JsonCallbackDecorator = JsonCallbackDecorator;
