"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAudioUploadEntity = void 0;
const entity_1 = require("../../validators/audio-upload/entity");
const audio_upload_entity_1 = require("./audio-upload-entity");
const uuid_1 = require("uuid");
const makeAudioUploadEntity = new audio_upload_entity_1.AudioUploadEntity().init({
    makeEntityValidator: entity_1.makeAudioUploadEntityValidator,
    uuidv4: uuid_1.v4,
});
exports.makeAudioUploadEntity = makeAudioUploadEntity;
