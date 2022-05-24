import { makeCacheService } from '../../../data-access/cache-service';
import { makeBaseQueryValidator } from '../../../validators/base/query';

const makeGetAudioUploadUseCase = new GetAudioUploadUsecase().init({
  makeQueryValidator: makeBaseQueryValidator,
  makeCacheService,
});

export { makeGetAudioUploadUseCase };
