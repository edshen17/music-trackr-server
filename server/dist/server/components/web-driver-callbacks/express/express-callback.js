"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressCallback = void 0;
const abstract_express_callback_1 = require("./abstractions/abstract-express-callback");
class ExpressCallback extends abstract_express_callback_1.AbstractExpressCallback {
    consumeTemplate = (res, body) => {
        return;
    };
}
exports.ExpressCallback = ExpressCallback;
