"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAudioUploadUseCase = void 0;
const abstract_use_case_1 = require("../../abstractions/abstract-use-case");
const cache_service_1 = require("../../../data-access/cache-service/cache-service");
class CreateAudioUploadUseCase extends abstract_use_case_1.AbstractUseCase {
    _audioUploadEntity;
    _makeRequestTemplate = async (props) => {
        const { routeData } = props;
        const { body } = routeData;
        const audioUploadEntity = await this._audioUploadEntity.build(body);
        const hashKey = cache_service_1.MODEL_NAME.AUDIO_UPLOAD;
        const audioUpload = await this._cacheService.set({
            hashKey,
            key: audioUploadEntity._id,
            value: audioUploadEntity,
        });
        return { audioUpload };
    };
    _initTemplate = async (optionalInitParams) => {
        const { makeAudioUploadEntity } = optionalInitParams;
        this._audioUploadEntity = await makeAudioUploadEntity;
    };
}
exports.CreateAudioUploadUseCase = CreateAudioUploadUseCase;
