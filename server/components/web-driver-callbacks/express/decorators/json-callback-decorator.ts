import { AbstractExpressCallback } from '../abstractions/abstract-express-callback';

class JsonCallbackDecorator extends AbstractExpressCallback {
  private abstractExpressCallback: AbstractExpressCallback;

  constructor(abstractExpressCallback: AbstractExpressCallback) {
    super();
    this.abstractExpressCallback = abstractExpressCallback;
  }

  public consumeTemplate = (res: any, body: any) => {
    this.abstractExpressCallback.consumeTemplate(res, body);
    const { cookies, ...filteredBody } = body;
    res.json(filteredBody);
  };
}

export { JsonCallbackDecorator };
