import { AbstractExpressCallback } from '../abstractions/abstract-express-callback';

class RedirectCallbackDecorator extends AbstractExpressCallback {
  private abstractExpressCallback: AbstractExpressCallback;

  constructor(abstractExpressCallback: AbstractExpressCallback) {
    super();
    this.abstractExpressCallback = abstractExpressCallback;
  }

  public consumeTemplate = (res: any, body: any) => {
    this.abstractExpressCallback.consumeTemplate(res, body);
    if (!(body && 'redirectUrl' in body)) {
      throw new Error('Redirect url is not set. Make sure body has a redirectUrl property.');
    }
    const { redirectUrl } = body;
    return res.redirect(redirectUrl);
  };
}

export { RedirectCallbackDecorator };
