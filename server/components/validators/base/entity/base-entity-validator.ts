import { AbstractEntityValidator } from '../../abstractions/abstract-entity-validator';

class BaseEntityValidator extends AbstractEntityValidator {
  protected _initValidationSchemas = (): void => {
    this._createValidationSchema = this._joi.object().keys({});
  };
}

export { BaseEntityValidator };
