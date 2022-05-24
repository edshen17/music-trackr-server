import { StatusCodes } from 'http-status-codes';
import { makeGetAudioUploadUseCase } from '../../../use-cases/audio-upload/get-audio-upload-usecase';
import { GetAudioUploadController } from './get-audio-upload-controller';

const makeGetAudioUploadController = new GetAudioUploadController({
  successStatusCode: StatusCodes.OK,
  errorStatusCode: StatusCodes.NOT_FOUND,
}).init({
  makeUseCase: makeGetAudioUploadUseCase,
});

export { makeGetAudioUploadController };
