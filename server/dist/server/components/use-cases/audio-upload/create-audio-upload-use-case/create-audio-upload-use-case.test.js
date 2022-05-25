"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
const controller_data_builder_1 = require("../../utils/controller-data-builder");
let createAudioUploadUseCase;
let controllerDataBuilder;
let routeData;
let userData;
before(async () => {
    createAudioUploadUseCase = await _1.makeCreateAudioUploadUseCase;
    controllerDataBuilder = controller_data_builder_1.makeControllerDataBuilder;
});
beforeEach(async () => {
    routeData = {
        body: {},
        path: '',
        query: {},
        params: {},
        headers: {},
        cookies: {},
        req: {},
    };
    userData = {};
});
describe('createAudioUploadUseCase', () => {
    describe('makeRequest', () => {
        const createAudioUpload = async () => {
            const controllerData = controllerDataBuilder.userData(userData).routeData(routeData).build();
            const { audioUpload } = await createAudioUploadUseCase.makeRequest(controllerData);
            return audioUpload;
        };
        const createAudioUploadError = async () => {
            let error;
            try {
                await createAudioUpload();
            }
            catch (err) {
                error = err;
            }
            return error;
        };
        context('valid inputs', () => {
            it('should return the saved audio upload', async () => {
                routeData.body = {
                    userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
                    sourceUrl: 'https://fakeimg.pl/300/',
                    fileName: 'some file name',
                };
                const audioUpload = await createAudioUpload();
                (0, chai_1.expect)(audioUpload.userId).to.deep.equal(routeData.body.userId);
                (0, chai_1.expect)(audioUpload.sourceUrl).to.deep.equal(routeData.body.sourceUrl);
            });
        });
        context('invalid inputs', () => {
            it('should throw an error if body is empty', async () => {
                const error = await createAudioUploadError();
                (0, chai_1.expect)(error).to.have.property('message');
            });
            it('should throw an error if at least one value is incorrect', async () => {
                routeData.body = {
                    userId: 'bad id',
                    sourceUrl: 'https://fakeimg.pl/300/',
                };
                const error = await createAudioUploadError();
                (0, chai_1.expect)(error.message).to.equal('"userId" must be a valid GUID');
            });
        });
    });
});
