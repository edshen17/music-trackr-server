"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const http_status_codes_1 = require("http-status-codes");
const _1 = require(".");
const audio_upload_1 = require("../../../test-fixtures/audio-upload");
const i_http_request_builder_1 = require("../../utils/i-http-request-builder");
let iHttpRequestBuilder;
let getAudioUploadController;
let audioUploadTestFixture;
let mockAudioUpload;
let params;
before(async () => {
    iHttpRequestBuilder = i_http_request_builder_1.makeIHttpRequestBuilder;
    getAudioUploadController = await _1.makeGetAudioUploadController;
    audioUploadTestFixture = await audio_upload_1.makeAudioUploadTestFixture;
});
beforeEach(async () => {
    mockAudioUpload = await audioUploadTestFixture.createMockData();
    params = {
        audioUploadId: mockAudioUpload._id,
    };
});
describe('getAudioUploadController', () => {
    describe('makeRequest', () => {
        const getAudioUpload = async () => {
            const getAudioUploadHttpRequest = iHttpRequestBuilder.params(params).build();
            const getAudioUploadRes = await getAudioUploadController.makeRequest(getAudioUploadHttpRequest);
            return getAudioUploadRes;
        };
        context('valid request', () => {
            it('should return the audio upload and a success code', async () => {
                const { statusCode, body } = await getAudioUpload();
                (0, chai_1.expect)(statusCode).to.equal(http_status_codes_1.StatusCodes.OK);
                (0, chai_1.expect)(body).to.have.property('audioUpload');
            });
        });
        context('invalid request', () => {
            it('should respond with an error code', async () => {
                params = {};
                const createAudioUploadRes = await getAudioUpload();
                (0, chai_1.expect)(createAudioUploadRes.statusCode).to.equal(http_status_codes_1.StatusCodes.NOT_FOUND);
                (0, chai_1.expect)(createAudioUploadRes.body).to.have.property('error');
            });
        });
    });
});
