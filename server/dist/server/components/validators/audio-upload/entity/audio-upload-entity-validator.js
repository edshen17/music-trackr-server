"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUploadEntityValidator = void 0;
const abstract_entity_validator_1 = require("../../abstractions/abstract-entity-validator");
class AudioUploadEntityValidator extends abstract_entity_validator_1.AbstractEntityValidator {
    _initValidationSchemas = () => {
        this._createValidationSchema = this._joi.object().keys({
            userId: this._joi.string().guid().required(),
            fileName: this._joi.string().max(2048).required(),
            sourceUrl: this._joi.string().uri().max(2048),
            createdDate: this._joi.date(),
            lastModifiedDate: this._joi.date(),
        });
    };
}
exports.AudioUploadEntityValidator = AudioUploadEntityValidator;
