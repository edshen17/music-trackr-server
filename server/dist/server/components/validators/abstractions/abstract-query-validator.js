"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractQueryValidator = void 0;
const abstract_validator_1 = require("./abstract-validator");
class AbstractQueryValidator extends abstract_validator_1.AbstractValidator {
    _queryValidationSchema;
    _validateProps = (props) => {
        const { query } = props;
        const validatedProps = this._queryValidationSchema.validate(query);
        return validatedProps;
    };
}
exports.AbstractQueryValidator = AbstractQueryValidator;
