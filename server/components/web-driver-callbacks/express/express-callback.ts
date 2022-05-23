import { Request, Response } from 'express';
import { AbstractExpressCallback } from './abstractions/abstract-express-callback';

class ExpressCallback extends AbstractExpressCallback {
  public consumeTemplate = (res: Response, body: Request['body']): void => {
    return;
  };
}

export { ExpressCallback };
