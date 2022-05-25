import { Request, Response } from 'express';
import { AbstractExpressCallback } from '../abstractions/abstract-express-callback';
declare class CookieCallbackDecorator extends AbstractExpressCallback {
    private abstractExpressCallback;
    constructor(abstractExpressCallback: AbstractExpressCallback);
    consumeTemplate: (res: Response, body: Request['body']) => void;
}
export { CookieCallbackDecorator };
