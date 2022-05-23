import { Request, Response } from 'express';
import { IController } from '../../../controllers/abstractions/i-controller';
import { IExpressCallback } from './i-express-callback';
import { IHttpRequest } from './i-http-request';

abstract class AbstractExpressCallback implements IExpressCallback {
  public abstract consumeTemplate(res: Response, body: Request['body']): void;

  public consume = (
    makeController: Promise<IController<any>>
  ): ((req: Request, res: Response) => Promise<void>) => {
    return async (req: Request, res: Response): Promise<void> => {
      try {
        const httpRequest = this._createHttpRequest(req);
        const controller = await makeController;
        const httpResponse = await controller.makeRequest(httpRequest);
        const { headers, statusCode, body } = httpResponse;
        if (headers) {
          res.set(headers);
        }
        res.status(statusCode);
        if ('error' in body) {
          res.json(body);
        } else {
          this.consumeTemplate(res, body);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          res.status(500).send({ error: err.message });
        }
      }
    };
  };

  private _createHttpRequest = (req: Request): IHttpRequest => {
    const { body, query, params, originalUrl, headers, cookies } = req;
    const httpRequest = {
      body,
      path: originalUrl,
      query,
      params,
      headers,
      cookies,
      userData: {}, // can fill out with user id/auth token from middleware
      req,
    };
    return httpRequest;
  };
}

export { AbstractExpressCallback };
