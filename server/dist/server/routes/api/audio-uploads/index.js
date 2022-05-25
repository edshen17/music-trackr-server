"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioUploads = void 0;
const express_1 = __importDefault(require("express"));
const create_audio_upload_controller_1 = require("../../../components/controllers/audio-upload/create-audio-upload-controller");
const get_audio_upload_controller_1 = require("../../../components/controllers/audio-upload/get-audio-upload-controller");
const express_2 = require("../../../components/web-driver-callbacks/express");
const audioUploads = express_1.default.Router();
exports.audioUploads = audioUploads;
audioUploads.post('/', express_2.makeJsonExpressCallback.consume(create_audio_upload_controller_1.makeCreateAudioUploadController));
audioUploads.get('/:audioUploadId', express_2.makeJsonExpressCallback.consume(get_audio_upload_controller_1.makeGetAudioUploadController));
