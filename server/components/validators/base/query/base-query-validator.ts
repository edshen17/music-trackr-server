import { AbstractQueryValidator } from '../../abstractions/abstract-query-validator';

class BaseQueryValidator extends AbstractQueryValidator {
  protected _initValidationSchemas = (): void => {
    this._queryValidationSchema = this._joi.object().keys({});
  };
}

export { BaseQueryValidator };
