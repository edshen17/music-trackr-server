import { GetAudioUploadUseCaseResponse } from '../../../use-cases/audio-upload/get-audio-upload-usecase/get-audio-upload-use-case';
import { AbstractController, ControllerParams } from '../../abstractions/abstract-controller';
declare class GetAudioUploadController extends AbstractController<GetAudioUploadUseCaseResponse> {
    constructor(props: ControllerParams);
}
export { GetAudioUploadController };
