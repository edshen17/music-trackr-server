import { expect } from 'chai';
import { StatusCodes } from 'http-status-codes';
import { makeCreateAudioUploadController } from '.';
import { StringKeyObject } from '../../../../types/custom';
import { makeIHttpRequestBuilder } from '../../utils/i-http-request-builder';
import { IHttpRequestBuilder } from '../../utils/i-http-request-builder/i-http-request-builder';
import { CreateAudioUploadController } from './create-audio-upload-controller';

let iHttpRequestBuilder: IHttpRequestBuilder;
let createAudioUploadController: CreateAudioUploadController;
let body: StringKeyObject;

before(async () => {
  iHttpRequestBuilder = makeIHttpRequestBuilder;
  createAudioUploadController = await makeCreateAudioUploadController;
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
      const createAudioUploadRes = await createAudioUploadController.makeRequest(
        createAudioUploadHttpRequest
      );
      return createAudioUploadRes;
    };
    context('valid request', () => {
      it('should return the audio upload and a success code', async () => {
        const { statusCode, body } = await createAudioUpload();
        expect(statusCode).to.equal(StatusCodes.CREATED);
        expect(body).to.have.property('audioUpload');
      });
    });
    context('invalid request', () => {
      it('should respond with an error code', async () => {
        body = {};
        const createAudioUploadRes = await createAudioUpload();
        expect(createAudioUploadRes.statusCode).to.equal(StatusCodes.CONFLICT);
        expect(createAudioUploadRes.body).to.have.property('error');
      });
    });
  });
});
