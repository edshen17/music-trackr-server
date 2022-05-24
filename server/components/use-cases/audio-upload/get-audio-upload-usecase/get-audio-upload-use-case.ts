import { AudioUploadEntityBuildResponse } from '../../../entities/audio-upload/audio-upload-entity';
import { AbstractUseCase } from '../../abstractions/abstract-use-case';
import { ControllerData } from '../../abstractions/i-use-case';
import { MODEL_NAME } from '../../../data-access/cache-service/cache-service';

type OptionalGetAudioUploadUseCaseInitParams = {};

type GetAudioUploadUseCaseResponse = {
  audioUpload: AudioUploadEntityBuildResponse;
};

class GetAudioUploadUseCase extends AbstractUseCase<
  OptionalGetAudioUploadUseCaseInitParams,
  GetAudioUploadUseCaseResponse
> {
  protected _makeRequestTemplate = async (
    props: ControllerData
  ): Promise<GetAudioUploadUseCaseResponse> => {
    const { routeData } = props;
    const { params } = routeData;
    const { audioUploadId } = params;
    const audioUpload = <AudioUploadEntityBuildResponse>await this._cacheService.get({
      hashKey: MODEL_NAME.AUDIO_UPLOAD,
      key: audioUploadId,
    });
    return { audioUpload };
  };
}

export { GetAudioUploadUseCase, GetAudioUploadUseCaseResponse };
