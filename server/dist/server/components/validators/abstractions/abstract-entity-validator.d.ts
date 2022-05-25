import Joi, { ValidationResult } from 'joi';
import { AbstractValidator } from './abstract-validator';
declare type OptionalEntityValidatorInitParams = {};
declare type EntityValidatorValidateParams = {
    buildParams: {};
};
declare abstract class AbstractEntityValidator extends AbstractValidator<OptionalEntityValidatorInitParams, EntityValidatorValidateParams> {
    protected _createValidationSchema: Joi.ObjectSchema<any>;
    protected _validateProps: (props: EntityValidatorValidateParams) => ValidationResult<any>;
}
export { AbstractEntityValidator };
