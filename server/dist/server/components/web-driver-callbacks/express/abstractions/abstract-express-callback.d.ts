import { Request, Response } from 'express';
import { IController } from '../../../controllers/abstractions/i-controller';
import { IExpressCallback } from './i-express-callback';
declare abstract class AbstractExpressCallback implements IExpressCallback {
    abstract consumeTemplate(res: Response, body: Request['body']): void;
    consume: (makeController: Promise<IController<any>>) => (req: Request, res: Response) => Promise<void>;
    private _createHttpRequest;
}
export { AbstractExpressCallback };
