import { joi } from '..';
import { StringKeyObject } from '../../../types/custom';

type ValidatorInitParams<OptionalValidatorInitParams> = RequiredValidatorInitParams &
  OptionalValidatorInitParams;

type RequiredValidatorInitParams = {
  joi: typeof joi;
};

interface IValidator<OptionalValidatorInitParams, ValidatorValidateParams> {
  validate: (props: ValidatorValidateParams) => StringKeyObject;
  init: (initParams: ValidatorInitParams<OptionalValidatorInitParams>) => this;
}

export { IValidator, ValidatorInitParams };
