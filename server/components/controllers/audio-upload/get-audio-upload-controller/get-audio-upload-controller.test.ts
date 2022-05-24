import { expect } from 'chai';
import { StatusCodes } from 'http-status-codes';
import { makeGetAudioUploadController } from '.';
import { StringKeyObject } from '../../../../types/custom';
import { AudioUploadEntityBuildResponse } from '../../../entities/audio-upload/audio-upload-entity';
import { makeAudioUploadTestFixture } from '../../../test-fixtures/audio-upload';
import { AudioUploadTestFixture } from '../../../test-fixtures/audio-upload/audio-upload-test-fixture';
import { makeIHttpRequestBuilder } from '../../utils/i-http-request-builder';
import { IHttpRequestBuilder } from '../../utils/i-http-request-builder/i-http-request-builder';
import { GetAudioUploadController } from './get-audio-upload-controller';

let iHttpRequestBuilder: IHttpRequestBuilder;
let getAudioUploadController: GetAudioUploadController;
let audioUploadTestFixture: AudioUploadTestFixture;
let mockAudioUpload: AudioUploadEntityBuildResponse;
let params: StringKeyObject;

before(async () => {
  iHttpRequestBuilder = makeIHttpRequestBuilder;
  getAudioUploadController = await makeGetAudioUploadController;
  audioUploadTestFixture = await makeAudioUploadTestFixture;
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
      const getAudioUploadRes = await getAudioUploadController.makeRequest(
        getAudioUploadHttpRequest
      );
      return getAudioUploadRes;
    };
    context('valid request', () => {
      it('should return the audio upload and a success code', async () => {
        const { statusCode, body } = await getAudioUpload();
        expect(statusCode).to.equal(StatusCodes.OK);
        expect(body).to.have.property('audioUpload');
      });
    });
    context('invalid request', () => {
      it('should respond with an error code', async () => {
        params = {};
        const createAudioUploadRes = await getAudioUpload();
        expect(createAudioUploadRes.statusCode).to.equal(StatusCodes.NOT_FOUND);
        expect(createAudioUploadRes.body).to.have.property('error');
      });
    });
  });
});
