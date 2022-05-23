import { ValidationResult } from 'joi';
import { joi } from '..';
import { StringKeyObject } from '../../../types/custom';
import { IValidator, ValidatorInitParams } from './i-validator';

abstract class AbstractValidator<OptionalValidatorInitParams, ValidatorValidateParams>
  implements IValidator<OptionalValidatorInitParams, ValidatorValidateParams>
{
  protected _joi!: typeof joi;

  public validate = (props: ValidatorValidateParams): StringKeyObject => {
    const validationObj = this._validateProps(props);
    if (validationObj.error) {
      const errMessage = validationObj.error.details[0].message;
      throw new Error(errMessage);
    } else {
      const validatedProps = validationObj.value;
      return validatedProps;
    }
  };

  protected abstract _validateProps(props: ValidatorValidateParams): ValidationResult<any>;

  public init = (initParams: ValidatorInitParams<OptionalValidatorInitParams>): this => {
    const { joi, ...optionalInitParams } = initParams;
    this._joi = joi;
    this._initTemplate(optionalInitParams);
    this._initValidationSchemas();
    return this;
  };

  protected _initTemplate = (
    optionalInitParams: Omit<ValidatorInitParams<OptionalValidatorInitParams>, 'joi'>
  ): void => {
    return;
  };

  protected abstract _initValidationSchemas(): void;
}

export { AbstractValidator };
