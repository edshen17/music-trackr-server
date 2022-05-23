import { CreateAudioUploadUseCaseResponse } from '../../../use-cases/audio-upload/create-audio-upload-use-case/create-audio-upload-use-case';
import { AbstractController, ControllerParams } from '../../abstractions/abstract-controller';

class CreateAudioUploadController extends AbstractController<CreateAudioUploadUseCaseResponse> {
  constructor(props: ControllerParams) {
    super(props);
  }
}

export { CreateAudioUploadController };
