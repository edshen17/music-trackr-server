import { ValidationResult } from 'joi';
import { AbstractValidator } from './abstract-validator';

type OptionalQueryValidatorInitParams = {};

type QueryValidatorValidateParams = {
  query: {};
};

abstract class AbstractQueryValidator extends AbstractValidator<
  OptionalQueryValidatorInitParams,
  QueryValidatorValidateParams
> {
  protected _queryValidationSchema!: any;

  protected _validateProps = (props: QueryValidatorValidateParams): ValidationResult<any> => {
    const { query } = props;
    const validatedProps = this._queryValidationSchema.validate(query);
    return validatedProps;
  };
}

export { AbstractQueryValidator };
