import { AbstractExpressCallback } from '../abstractions/abstract-express-callback';
declare class JsonCallbackDecorator extends AbstractExpressCallback {
    private abstractExpressCallback;
    constructor(abstractExpressCallback: AbstractExpressCallback);
    consumeTemplate: (res: any, body: any) => void;
}
export { JsonCallbackDecorator };
