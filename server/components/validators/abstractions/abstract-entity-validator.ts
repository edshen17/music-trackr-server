import Joi, { ValidationResult } from 'joi';
import { AbstractValidator } from './abstract-validator';

type OptionalEntityValidatorInitParams = {};

type EntityValidatorValidateParams = {
  buildParams: {};
};

abstract class AbstractEntityValidator extends AbstractValidator<
  OptionalEntityValidatorInitParams,
  EntityValidatorValidateParams
> {
  protected _createValidationSchema!: Joi.ObjectSchema<any>;

  protected _validateProps = (props: EntityValidatorValidateParams): ValidationResult<any> => {
    const { buildParams } = props;
    const validatedProps = this._createValidationSchema.validate(buildParams);
    return validatedProps;
  };
}

export { AbstractEntityValidator };
