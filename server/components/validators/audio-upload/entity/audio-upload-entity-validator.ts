import { AbstractEntityValidator } from '../../abstractions/abstract-entity-validator';

class AudioUploadEntityValidator extends AbstractEntityValidator {
  protected _initValidationSchemas = (): void => {
    this._createValidationSchema = this._joi.object().keys({
      userId: this._joi.string().guid().required(),
      sourceUrl: this._joi.string().uri().max(2048),
      createdDate: this._joi.date(),
      lastModifiedDate: this._joi.date(),
    });
  };
}

export { AudioUploadEntityValidator };
