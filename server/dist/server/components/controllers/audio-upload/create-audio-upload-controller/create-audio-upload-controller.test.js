"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const http_status_codes_1 = require("http-status-codes");
const _1 = require(".");
const i_http_request_builder_1 = require("../../utils/i-http-request-builder");
let iHttpRequestBuilder;
let createAudioUploadController;
let body;
before(async () => {
    iHttpRequestBuilder = i_http_request_builder_1.makeIHttpRequestBuilder;
    createAudioUploadController = await _1.makeCreateAudioUploadController;
});
beforeEach(() => {
    body = {
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        sourceUrl: 'https://fakeimg.pl/300/',
        fileName: 'some file name',
    };
});
describe('createAudioUploadController', () => {
    describe('makeRequest', () => {
        const createAudioUpload = async () => {
            const createAudioUploadHttpRequest = iHttpRequestBuilder.body(body).build();
            const createAudioUploadRes = await createAudioUploadController.makeRequest(createAudioUploadHttpRequest);
            return createAudioUploadRes;
        };
        context('valid request', () => {
            it('should return the audio upload and a success code', async () => {
                const { statusCode, body } = await createAudioUpload();
                (0, chai_1.expect)(statusCode).to.equal(http_status_codes_1.StatusCodes.CREATED);
                (0, chai_1.expect)(body).to.have.property('audioUpload');
            });
        });
        context('invalid request', () => {
            it('should respond with an error code', async () => {
                body = {};
                const createAudioUploadRes = await createAudioUpload();
                (0, chai_1.expect)(createAudioUploadRes.statusCode).to.equal(http_status_codes_1.StatusCodes.CONFLICT);
                (0, chai_1.expect)(createAudioUploadRes.body).to.have.property('error');
            });
        });
    });
});
