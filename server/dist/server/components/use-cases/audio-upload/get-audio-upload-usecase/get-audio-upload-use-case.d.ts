import { AudioUploadEntityBuildResponse } from '../../../entities/audio-upload/audio-upload-entity';
import { AbstractUseCase } from '../../abstractions/abstract-use-case';
import { ControllerData } from '../../abstractions/i-use-case';
declare type OptionalGetAudioUploadUseCaseInitParams = {};
declare type GetAudioUploadUseCaseResponse = {
    audioUpload: AudioUploadEntityBuildResponse;
};
declare class GetAudioUploadUseCase extends AbstractUseCase<OptionalGetAudioUploadUseCaseInitParams, GetAudioUploadUseCaseResponse> {
    protected _makeRequestTemplate: (props: ControllerData) => Promise<GetAudioUploadUseCaseResponse>;
}
export { GetAudioUploadUseCase, GetAudioUploadUseCaseResponse };
