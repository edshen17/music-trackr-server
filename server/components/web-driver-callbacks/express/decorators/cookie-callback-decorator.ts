import { Request, Response } from 'express';
import { AbstractExpressCallback } from '../abstractions/abstract-express-callback';

class CookieCallbackDecorator extends AbstractExpressCallback {
  private abstractExpressCallback: AbstractExpressCallback;

  constructor(abstractExpressCallback: AbstractExpressCallback) {
    super();
    this.abstractExpressCallback = abstractExpressCallback;
  }

  public consumeTemplate = (res: Response, body: Request['body']): void => {
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

export { CookieCallbackDecorator };
