import { AudioUploadEntity, AudioUploadEntityBuildResponse } from '../../../entities/audio-upload/audio-upload-entity';
import { AbstractUseCase } from '../../abstractions/abstract-use-case';
import { ControllerData } from '../../abstractions/i-use-case';
declare type OptionalCreateAudioUploadUseCaseInitParams = {
    makeAudioUploadEntity: Promise<AudioUploadEntity>;
};
declare type CreateAudioUploadUseCaseResponse = {
    audioUpload: AudioUploadEntityBuildResponse;
};
declare class CreateAudioUploadUseCase extends AbstractUseCase<OptionalCreateAudioUploadUseCaseInitParams, CreateAudioUploadUseCaseResponse> {
    private _audioUploadEntity;
    protected _makeRequestTemplate: (props: ControllerData) => Promise<CreateAudioUploadUseCaseResponse>;
    protected _initTemplate: (optionalInitParams: OptionalCreateAudioUploadUseCaseInitParams) => Promise<void>;
}
export { CreateAudioUploadUseCase, CreateAudioUploadUseCaseResponse };
