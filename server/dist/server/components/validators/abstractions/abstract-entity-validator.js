"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEntityValidator = void 0;
const abstract_validator_1 = require("./abstract-validator");
class AbstractEntityValidator extends abstract_validator_1.AbstractValidator {
    _createValidationSchema;
    _validateProps = (props) => {
        const { buildParams } = props;
        const validatedProps = this._createValidationSchema.validate(buildParams);
        return validatedProps;
    };
}
exports.AbstractEntityValidator = AbstractEntityValidator;
