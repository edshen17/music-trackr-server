"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAudioUploadEntityValidator = void 0;
const __1 = require("../..");
const audio_upload_entity_validator_1 = require("./audio-upload-entity-validator");
const makeAudioUploadEntityValidator = new audio_upload_entity_validator_1.AudioUploadEntityValidator().init({ joi: __1.joi });
exports.makeAudioUploadEntityValidator = makeAudioUploadEntityValidator;
