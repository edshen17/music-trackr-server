import { StatusCodes } from 'http-status-codes';
import { makeCreateAudioUploadUseCase } from '../../../use-cases/audio-upload/create-audio-upload-use-case';
import { CreateAudioUploadController } from './create-audio-upload-controller';

const makeCreateAudioUploadController = new CreateAudioUploadController({
  successStatusCode: StatusCodes.CREATED,
  errorStatusCode: StatusCodes.CONFLICT,
}).init({
  makeUseCase: makeCreateAudioUploadUseCase,
});

export { makeCreateAudioUploadController };
