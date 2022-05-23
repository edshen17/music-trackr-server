import { joi } from '../..';
import { AudioUploadEntityValidator } from './audio-upload-entity-validator';

const makeAudioUploadEntityValidator = new AudioUploadEntityValidator().init({ joi });

export { makeAudioUploadEntityValidator };
