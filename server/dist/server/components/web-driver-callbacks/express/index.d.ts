import { CookieCallbackDecorator } from './decorators/cookie-callback-decorator';
import { JsonCallbackDecorator } from './decorators/json-callback-decorator';
import { RedirectCallbackDecorator } from './decorators/redirect-callback-decorator';
declare const makeCookieExpressCallback: CookieCallbackDecorator;
declare const makeRedirectExpressCallback: RedirectCallbackDecorator;
declare const makeCookieRedirectExpressCallback: CookieCallbackDecorator;
declare const makeJsonExpressCallback: JsonCallbackDecorator;
declare const makeJsonCookieExpressCallback: JsonCallbackDecorator;
export { makeCookieExpressCallback, makeRedirectExpressCallback, makeCookieRedirectExpressCallback, makeJsonExpressCallback, makeJsonCookieExpressCallback, };
