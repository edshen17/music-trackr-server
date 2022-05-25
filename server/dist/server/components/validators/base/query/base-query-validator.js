"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseQueryValidator = void 0;
const abstract_query_validator_1 = require("../../abstractions/abstract-query-validator");
class BaseQueryValidator extends abstract_query_validator_1.AbstractQueryValidator {
    _initValidationSchemas = () => {
        this._queryValidationSchema = this._joi.object().keys({});
    };
}
exports.BaseQueryValidator = BaseQueryValidator;
