import { faker } from '@faker-js/faker';
import { makeCacheService } from '../../data-access/cache-service';
import { MODEL_NAME } from '../../data-access/cache-service/cache-service';
import { makeAudioUploadEntity } from '../../entities/audio-upload';
import { AudioUploadTestFixture } from './audio-upload-test-fixture';

const makeAudioUploadTestFixture = new AudioUploadTestFixture().init({
  faker,
  makeEntity: makeAudioUploadEntity,
  modelName: MODEL_NAME.AUDIO_UPLOAD,
  makeCacheService,
});

export { makeAudioUploadTestFixture };
