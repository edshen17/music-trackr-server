import {
  AudioUploadEntity,
  AudioUploadEntityBuildResponse,
} from '../../../entities/audio-upload/audio-upload-entity';
import { AbstractUseCase } from '../../abstractions/abstract-use-case';
import { ControllerData } from '../../abstractions/i-use-case';
import { v4 } from 'uuid';

type OptionalCreateAudioUploadUseCaseInitParams = {
  makeAudioUploadEntity: Promise<AudioUploadEntity>;
  uuidv4: typeof v4;
};

type CreateAudioUploadUseCaseResponse = {
  audioUpload: AudioUploadEntityBuildResponse;
};

class CreateAudioUploadUseCase extends AbstractUseCase<
  OptionalCreateAudioUploadUseCaseInitParams,
  CreateAudioUploadUseCaseResponse
> {
  private _audioUploadEntity!: AudioUploadEntity;
  private _uuidv4!: typeof v4;

  protected _makeRequestTemplate = async (
    props: ControllerData
  ): Promise<CreateAudioUploadUseCaseResponse> => {
    const { routeData } = props;
    const { body } = routeData;
    const audioUploadEntity = await this._audioUploadEntity.build(body);
    const hashKey = 'audioUpload';
    const audioUpload = <AudioUploadEntityBuildResponse>await this._cacheService.set({
      hashKey,
      key: this._uuidv4(),
      value: audioUploadEntity,
    });
    return { audioUpload };
  };

  protected _initTemplate = async (
    optionalInitParams: OptionalCreateAudioUploadUseCaseInitParams
  ): Promise<void> => {
    const { makeAudioUploadEntity, uuidv4 } = optionalInitParams;
    this._audioUploadEntity = await makeAudioUploadEntity;
    this._uuidv4 = uuidv4;
  };
}

export { CreateAudioUploadUseCase, CreateAudioUploadUseCaseResponse };
