import { faker } from '@faker-js/faker';
import {
  AudioUploadEntityBuildParams,
  AudioUploadEntityBuildResponse,
} from '../../entities/audio-upload/audio-upload-entity';
import { AbstractTestFixture } from '../abstractions/abstract-test-fixture';

type OptionalAudioUploadTestFixtureInitParams = {
  faker: typeof faker;
};

class AudioUploadTestFixture extends AbstractTestFixture<
  OptionalAudioUploadTestFixtureInitParams,
  AudioUploadEntityBuildParams,
  AudioUploadEntityBuildResponse
> {
  private _faker!: typeof faker;

  protected _createMockBuildParams = async (): Promise<AudioUploadEntityBuildParams> => {
    const mockBuildParams = {
      userId: this._faker.datatype.uuid(),
      fileName: this._faker.name.findName(),
      sourceUrl: this._faker.image.imageUrl(),
    };
    return mockBuildParams;
  };

  protected _initTemplate = async (
    optionalInitParams: OptionalAudioUploadTestFixtureInitParams
  ) => {
    const { faker } = optionalInitParams;
    this._faker = faker;
  };
}

export { AudioUploadTestFixture };
