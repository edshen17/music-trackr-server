import express from 'express';
import { makeCreateAudioUploadController } from '../../../components/controllers/audio-upload/create-audio-upload-controller';
import { makeJsonExpressCallback } from '../../../components/web-driver-callbacks/express';

const audioUploads = express.Router();

audioUploads.post('/', makeJsonExpressCallback.consume(makeCreateAudioUploadController));
// audioUploads.get('/:audioUploadId', makeJsonExpressCallback.consume(makeGetAudioUploadUseCase))

export { audioUploads };
