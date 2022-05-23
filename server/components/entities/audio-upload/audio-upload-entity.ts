import { AbstractEntity } from '../abstractions/abstract-entity';

type OptionalAudioUploadEntityInitParams = {};

type AudioUploadEntityBuildResponse = {
  userId: string;
  sourceUrl: string;
  createdDate: Date;
  lastModifiedDate: Date;
};

type AudioUploadEntityBuildParams = Omit<
  AudioUploadEntityBuildResponse,
  'createdDate' | 'lastModifiedDate'
>;

class AudioUploadEntity extends AbstractEntity<
  OptionalAudioUploadEntityInitParams,
  AudioUploadEntityBuildParams,
  AudioUploadEntityBuildResponse
> {
  protected _buildTemplate = async (
    buildParams: AudioUploadEntityBuildParams
  ): Promise<AudioUploadEntityBuildResponse> => {
    const { userId, sourceUrl } = buildParams;
    const audioUploadEntity = {
      userId,
      sourceUrl,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
    };
    return audioUploadEntity;
  };
}

export { AudioUploadEntity, AudioUploadEntityBuildParams, AudioUploadEntityBuildResponse };
