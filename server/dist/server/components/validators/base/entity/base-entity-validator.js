"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityValidator = void 0;
const abstract_entity_validator_1 = require("../../abstractions/abstract-entity-validator");
class BaseEntityValidator extends abstract_entity_validator_1.AbstractEntityValidator {
    _initValidationSchemas = () => {
        this._createValidationSchema = this._joi.object().keys({});
    };
}
exports.BaseEntityValidator = BaseEntityValidator;
