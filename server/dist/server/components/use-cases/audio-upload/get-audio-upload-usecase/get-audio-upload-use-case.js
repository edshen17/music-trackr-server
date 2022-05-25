"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAudioUploadUseCase = void 0;
const abstract_use_case_1 = require("../../abstractions/abstract-use-case");
const cache_service_1 = require("../../../data-access/cache-service/cache-service");
class GetAudioUploadUseCase extends abstract_use_case_1.AbstractUseCase {
    _makeRequestTemplate = async (props) => {
        const { routeData } = props;
        const { params } = routeData;
        const { audioUploadId } = params;
        const audioUpload = await this._cacheService.get({
            hashKey: cache_service_1.MODEL_NAME.AUDIO_UPLOAD,
            key: audioUploadId,
        });
        return { audioUpload };
    };
}
exports.GetAudioUploadUseCase = GetAudioUploadUseCase;
