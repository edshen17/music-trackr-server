import { ValidationResult } from 'joi';
import { AbstractValidator } from './abstract-validator';
declare type OptionalQueryValidatorInitParams = {};
declare type QueryValidatorValidateParams = {
    query: {};
};
declare abstract class AbstractQueryValidator extends AbstractValidator<OptionalQueryValidatorInitParams, QueryValidatorValidateParams> {
    protected _queryValidationSchema: any;
    protected _validateProps: (props: QueryValidatorValidateParams) => ValidationResult<any>;
}
export { AbstractQueryValidator };
