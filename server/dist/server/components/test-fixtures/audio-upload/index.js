"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAudioUploadTestFixture = void 0;
const faker_1 = require("@faker-js/faker");
const cache_service_1 = require("../../data-access/cache-service");
const cache_service_2 = require("../../data-access/cache-service/cache-service");
const audio_upload_1 = require("../../entities/audio-upload");
const audio_upload_test_fixture_1 = require("./audio-upload-test-fixture");
const makeAudioUploadTestFixture = new audio_upload_test_fixture_1.AudioUploadTestFixture().init({
    faker: faker_1.faker,
    makeEntity: audio_upload_1.makeAudioUploadEntity,
    modelName: cache_service_2.MODEL_NAME.AUDIO_UPLOAD,
    makeCacheService: cache_service_1.makeCacheService,
});
exports.makeAudioUploadTestFixture = makeAudioUploadTestFixture;
