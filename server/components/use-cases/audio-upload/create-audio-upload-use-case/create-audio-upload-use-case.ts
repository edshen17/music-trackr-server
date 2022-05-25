import {
  AudioUploadEntity,
  AudioUploadEntityBuildResponse,
} from '../../../entities/audio-upload/audio-upload-entity';
import { AbstractUseCase } from '../../abstractions/abstract-use-case';
import { ControllerData } from '../../abstractions/i-use-case';
import { v4 } from 'uuid';
import { MODEL_NAME } from '../../../data-access/cache-service/cache-service';

type OptionalCreateAudioUploadUseCaseInitParams = {
  makeAudioUploadEntity: Promise<AudioUploadEntity>;
};

type CreateAudioUploadUseCaseResponse = {
  audioUpload: AudioUploadEntityBuildResponse;
};

class CreateAudioUploadUseCase extends AbstractUseCase<
  OptionalCreateAudioUploadUseCaseInitParams,
  CreateAudioUploadUseCaseResponse
> {
  private _audioUploadEntity!: AudioUploadEntity;

  protected _makeRequestTemplate = async (
    props: ControllerData
  ): Promise<CreateAudioUploadUseCaseResponse> => {
    const { routeData } = props;
    const { body } = routeData;
    const audioUploadEntity = await this._audioUploadEntity.build(body);
    const hashKey = MODEL_NAME.AUDIO_UPLOAD;
    const audioUpload = <AudioUploadEntityBuildResponse>await this._cacheService.set({
      hashKey,
      key: audioUploadEntity._id,
      value: audioUploadEntity,
    });
    return { audioUpload };
  };

  protected _initTemplate = async (
    optionalInitParams: OptionalCreateAudioUploadUseCaseInitParams
  ): Promise<void> => {
    const { makeAudioUploadEntity } = optionalInitParams;
    this._audioUploadEntity = await makeAudioUploadEntity;
  };
}

export { CreateAudioUploadUseCase, CreateAudioUploadUseCaseResponse };
