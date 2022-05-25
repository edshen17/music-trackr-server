"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateAudioUploadUseCase = void 0;
const cache_service_1 = require("../../../data-access/cache-service");
const query_1 = require("../../../validators/base/query");
const create_audio_upload_use_case_1 = require("./create-audio-upload-use-case");
const audio_upload_1 = require("../../../entities/audio-upload");
const makeCreateAudioUploadUseCase = new create_audio_upload_use_case_1.CreateAudioUploadUseCase().init({
    makeQueryValidator: query_1.makeBaseQueryValidator,
    makeCacheService: cache_service_1.makeCacheService,
    makeAudioUploadEntity: audio_upload_1.makeAudioUploadEntity,
});
exports.makeCreateAudioUploadUseCase = makeCreateAudioUploadUseCase;
