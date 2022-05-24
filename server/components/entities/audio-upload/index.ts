import { makeAudioUploadEntityValidator } from '../../validators/audio-upload/entity';
import { AudioUploadEntity } from './audio-upload-entity';
import { v4 as uuidv4 } from 'uuid';

const makeAudioUploadEntity = new AudioUploadEntity().init({
  makeEntityValidator: makeAudioUploadEntityValidator,
  uuidv4,
});

export { makeAudioUploadEntity };
