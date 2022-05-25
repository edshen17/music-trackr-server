/// <reference types="custom" />
import { joi } from '..';
import { StringKeyObject } from '../../../types/custom';
declare type ValidatorInitParams<OptionalValidatorInitParams> = RequiredValidatorInitParams & OptionalValidatorInitParams;
declare type RequiredValidatorInitParams = {
    joi: typeof joi;
};
interface IValidator<OptionalValidatorInitParams, ValidatorValidateParams> {
    validate: (props: ValidatorValidateParams) => StringKeyObject;
    init: (initParams: ValidatorInitParams<OptionalValidatorInitParams>) => this;
}
export { IValidator, ValidatorInitParams };
