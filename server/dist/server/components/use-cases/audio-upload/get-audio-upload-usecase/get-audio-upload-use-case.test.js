"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
const audio_upload_1 = require("../../../test-fixtures/audio-upload");
const controller_data_builder_1 = require("../../utils/controller-data-builder");
let getAudioUploadUseCase;
let audioUploadTestFixture;
let controllerDataBuilder;
let mockAudioUpload;
let routeData;
let userData;
before(async () => {
    getAudioUploadUseCase = await _1.makeGetAudioUploadUseCase;
    audioUploadTestFixture = await audio_upload_1.makeAudioUploadTestFixture;
    controllerDataBuilder = controller_data_builder_1.makeControllerDataBuilder;
});
beforeEach(async () => {
    mockAudioUpload = await audioUploadTestFixture.createMockData();
    routeData = {
        body: {},
        path: '',
        query: {},
        params: {
            audioUploadId: mockAudioUpload._id,
        },
        headers: {},
        cookies: {},
        req: {},
    };
    userData = {};
});
describe('getAudioUploadUseCase', () => {
    describe('makeRequest', () => {
        const getAudioUpload = async () => {
            const controllerData = controllerDataBuilder.userData(userData).routeData(routeData).build();
            const { audioUpload } = await getAudioUploadUseCase.makeRequest(controllerData);
            return audioUpload;
        };
        const getAudioUploadError = async () => {
            let error;
            try {
                await getAudioUpload();
            }
            catch (err) {
                error = err;
            }
            return error;
        };
        context('valid inputs', () => {
            it('should get an audio upload with the given id', async () => {
                const audioUpload = await getAudioUpload();
                (0, chai_1.expect)(audioUpload._id).to.deep.equal(routeData.params.audioUploadId);
            });
        });
        context('invalid inputs', () => {
            it('should throw an error if audio upload not found', async () => {
                routeData.params = {};
                const error = await getAudioUploadError();
                (0, chai_1.expect)(error).to.have.property('message');
            });
        });
    });
});
