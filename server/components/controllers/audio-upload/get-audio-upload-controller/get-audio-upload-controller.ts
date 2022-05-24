import { GetAudioUploadUseCaseResponse } from '../../../use-cases/audio-upload/get-audio-upload-usecase/get-audio-upload-use-case';
import { AbstractController, ControllerParams } from '../../abstractions/abstract-controller';

class GetAudioUploadController extends AbstractController<GetAudioUploadUseCaseResponse> {
  constructor(props: ControllerParams) {
    super(props);
  }
}

export { GetAudioUploadController };
