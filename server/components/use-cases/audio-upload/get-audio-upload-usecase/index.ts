import { makeCacheService } from '../../../data-access/cache-service';
import { makeBaseQueryValidator } from '../../../validators/base/query';
import { GetAudioUploadUseCase } from './get-audio-upload-use-case';

const makeGetAudioUploadUseCase = new GetAudioUploadUseCase().init({
  makeQueryValidator: makeBaseQueryValidator,
  makeCacheService,
});

export { makeGetAudioUploadUseCase };
