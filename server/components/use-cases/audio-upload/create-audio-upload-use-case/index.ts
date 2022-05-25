import { makeCacheService } from '../../../data-access/cache-service';
import { makeBaseQueryValidator } from '../../../validators/base/query';
import { CreateAudioUploadUseCase } from './create-audio-upload-use-case';
import { makeAudioUploadEntity } from '../../../entities/audio-upload';

const makeCreateAudioUploadUseCase = new CreateAudioUploadUseCase().init({
  makeQueryValidator: makeBaseQueryValidator,
  makeCacheService,
  makeAudioUploadEntity,
});

export { makeCreateAudioUploadUseCase };
