import { makeAudioUploadEntityValidator } from '../../validators/audio-upload/entity';
import { AudioUploadEntity } from './audio-upload-entity';

const makeAudioUploadEntity = new AudioUploadEntity().init({
  makeEntityValidator: makeAudioUploadEntityValidator,
});

export { makeAudioUploadEntity };
