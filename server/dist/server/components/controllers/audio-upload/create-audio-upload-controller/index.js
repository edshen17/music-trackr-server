"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAudioUploadController = void 0;
const http_status_codes_1 = require("http-status-codes");
const create_audio_upload_use_case_1 = require("../../../use-cases/audio-upload/create-audio-upload-use-case");
const create_audio_upload_controller_1 = require("./create-audio-upload-controller");
const makeCreateAudioUploadController = new create_audio_upload_controller_1.CreateAudioUploadController({
    successStatusCode: http_status_codes_1.StatusCodes.CREATED,
    errorStatusCode: http_status_codes_1.StatusCodes.CONFLICT,
}).init({
    makeUseCase: create_audio_upload_use_case_1.makeCreateAudioUploadUseCase,
});
exports.makeCreateAudioUploadController = makeCreateAudioUploadController;
