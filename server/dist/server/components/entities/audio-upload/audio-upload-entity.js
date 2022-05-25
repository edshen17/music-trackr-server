"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUploadEntity = void 0;
const abstract_entity_1 = require("../abstractions/abstract-entity");
class AudioUploadEntity extends abstract_entity_1.AbstractEntity {
    _uuidv4;
    _buildTemplate = async (buildParams) => {
        const { userId, sourceUrl, fileName } = buildParams;
        const audioUploadEntity = {
            _id: this._uuidv4(),
            userId,
            fileName,
            sourceUrl,
            createdDate: new Date(),
            lastModifiedDate: new Date(),
        };
        return audioUploadEntity;
    };
    _initTemplate = async (optionalInitParams) => {
        const { uuidv4 } = optionalInitParams;
        this._uuidv4 = uuidv4;
    };
}
exports.AudioUploadEntity = AudioUploadEntity;
