"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAudioUploadUseCase = void 0;
const cache_service_1 = require("../../../data-access/cache-service");
const query_1 = require("../../../validators/base/query");
const get_audio_upload_use_case_1 = require("./get-audio-upload-use-case");
const makeGetAudioUploadUseCase = new get_audio_upload_use_case_1.GetAudioUploadUseCase().init({
    makeQueryValidator: query_1.makeBaseQueryValidator,
    makeCacheService: cache_service_1.makeCacheService,
});
exports.makeGetAudioUploadUseCase = makeGetAudioUploadUseCase;
