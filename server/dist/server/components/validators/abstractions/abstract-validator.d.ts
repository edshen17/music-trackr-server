import { ValidationResult } from 'joi';
import { joi } from '..';
import { StringKeyObject } from '../../../types/custom';
import { IValidator, ValidatorInitParams } from './i-validator';
declare abstract class AbstractValidator<OptionalValidatorInitParams, ValidatorValidateParams> implements IValidator<OptionalValidatorInitParams, ValidatorValidateParams> {
    protected _joi: typeof joi;
    validate: (props: ValidatorValidateParams) => StringKeyObject;
    protected abstract _validateProps(props: ValidatorValidateParams): ValidationResult<any>;
    init: (initParams: ValidatorInitParams<OptionalValidatorInitParams>) => this;
    protected _initTemplate: (optionalInitParams: Omit<ValidatorInitParams<OptionalValidatorInitParams>, 'joi'>) => void;
    protected abstract _initValidationSchemas(): void;
}
export { AbstractValidator };
