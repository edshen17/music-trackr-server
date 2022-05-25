import { faker } from '@faker-js/faker';
import { AudioUploadEntityBuildParams, AudioUploadEntityBuildResponse } from '../../entities/audio-upload/audio-upload-entity';
import { AbstractTestFixture } from '../abstractions/abstract-test-fixture';
declare type OptionalAudioUploadTestFixtureInitParams = {
    faker: typeof faker;
};
declare class AudioUploadTestFixture extends AbstractTestFixture<OptionalAudioUploadTestFixtureInitParams, AudioUploadEntityBuildParams, AudioUploadEntityBuildResponse> {
    private _faker;
    protected _createMockBuildParams: () => Promise<AudioUploadEntityBuildParams>;
    protected _initTemplate: (optionalInitParams: OptionalAudioUploadTestFixtureInitParams) => Promise<void>;
}
export { AudioUploadTestFixture };
