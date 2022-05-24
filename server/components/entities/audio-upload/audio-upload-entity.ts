import { AbstractEntity } from '../abstractions/abstract-entity';
import { v4 } from 'uuid';

type OptionalAudioUploadEntityInitParams = {
  uuidv4: typeof v4;
};

type AudioUploadEntityBuildResponse = {
  _id: string;
  userId: string;
  sourceUrl: string;
  createdDate: Date;
  lastModifiedDate: Date;
};

type AudioUploadEntityBuildParams = Omit<
  AudioUploadEntityBuildResponse,
  'createdDate' | 'lastModifiedDate' | '_id'
>;

class AudioUploadEntity extends AbstractEntity<
  OptionalAudioUploadEntityInitParams,
  AudioUploadEntityBuildParams,
  AudioUploadEntityBuildResponse
> {
  private _uuidv4!: typeof v4;

  protected _buildTemplate = async (
    buildParams: AudioUploadEntityBuildParams
  ): Promise<AudioUploadEntityBuildResponse> => {
    const { userId, sourceUrl } = buildParams;
    const audioUploadEntity = {
      _id: this._uuidv4(),
      userId,
      sourceUrl,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
    };
    return audioUploadEntity;
  };

  protected _initTemplate = async (
    optionalInitParams: OptionalAudioUploadEntityInitParams
  ): Promise<void> => {
    const { uuidv4 } = optionalInitParams;
    this._uuidv4 = uuidv4;
  };
}

export { AudioUploadEntity, AudioUploadEntityBuildParams, AudioUploadEntityBuildResponse };
