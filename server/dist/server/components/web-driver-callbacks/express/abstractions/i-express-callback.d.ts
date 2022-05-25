import { Request, Response } from 'express';
import { IController } from '../../../controllers/abstractions/i-controller';
interface IExpressCallback {
    consume: (makeController: Promise<IController<any>>) => (req: Request, res: Response) => Promise<void>;
}
export { IExpressCallback };
