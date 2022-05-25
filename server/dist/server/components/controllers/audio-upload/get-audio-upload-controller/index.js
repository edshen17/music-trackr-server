"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAudioUploadController = void 0;
const http_status_codes_1 = require("http-status-codes");
const get_audio_upload_usecase_1 = require("../../../use-cases/audio-upload/get-audio-upload-usecase");
const get_audio_upload_controller_1 = require("./get-audio-upload-controller");
const makeGetAudioUploadController = new get_audio_upload_controller_1.GetAudioUploadController({
    successStatusCode: http_status_codes_1.StatusCodes.OK,
    errorStatusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
}).init({
    makeUseCase: get_audio_upload_usecase_1.makeGetAudioUploadUseCase,
});
exports.makeGetAudioUploadController = makeGetAudioUploadController;
