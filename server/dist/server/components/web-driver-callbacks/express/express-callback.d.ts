import { Request, Response } from 'express';
import { AbstractExpressCallback } from './abstractions/abstract-express-callback';
declare class ExpressCallback extends AbstractExpressCallback {
    consumeTemplate: (res: Response, body: Request['body']) => void;
}
export { ExpressCallback };
