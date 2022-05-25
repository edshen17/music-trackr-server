import { AbstractEntity } from '../abstractions/abstract-entity';
import { v4 } from 'uuid';
declare type OptionalAudioUploadEntityInitParams = {
    uuidv4: typeof v4;
};
declare type AudioUploadEntityBuildResponse = {
    _id: string;
    userId: string;
    fileName: string;
    sourceUrl: string;
    createdDate: Date;
    lastModifiedDate: Date;
};
declare type AudioUploadEntityBuildParams = Omit<AudioUploadEntityBuildResponse, 'createdDate' | 'lastModifiedDate' | '_id'>;
declare class AudioUploadEntity extends AbstractEntity<OptionalAudioUploadEntityInitParams, AudioUploadEntityBuildParams, AudioUploadEntityBuildResponse> {
    private _uuidv4;
    protected _buildTemplate: (buildParams: AudioUploadEntityBuildParams) => Promise<AudioUploadEntityBuildResponse>;
    protected _initTemplate: (optionalInitParams: OptionalAudioUploadEntityInitParams) => Promise<void>;
}
export { AudioUploadEntity, AudioUploadEntityBuildParams, AudioUploadEntityBuildResponse };
