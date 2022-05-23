import { CookieCallbackDecorator } from './decorators/cookie-callback-decorator';
import { JsonCallbackDecorator } from './decorators/json-callback-decorator';
import { RedirectCallbackDecorator } from './decorators/redirect-callback-decorator';
import { ExpressCallback } from './express-callback';

const makeExpressCallback = new ExpressCallback();
const makeCookieExpressCallback = new CookieCallbackDecorator(makeExpressCallback);
const makeRedirectExpressCallback = new RedirectCallbackDecorator(makeExpressCallback);
const makeCookieRedirectExpressCallback = new CookieCallbackDecorator(makeRedirectExpressCallback);
const makeJsonExpressCallback = new JsonCallbackDecorator(makeExpressCallback);
const makeJsonCookieExpressCallback = new JsonCallbackDecorator(makeCookieExpressCallback);

export {
  makeCookieExpressCallback,
  makeRedirectExpressCallback,
  makeCookieRedirectExpressCallback,
  makeJsonExpressCallback,
  makeJsonCookieExpressCallback,
};
