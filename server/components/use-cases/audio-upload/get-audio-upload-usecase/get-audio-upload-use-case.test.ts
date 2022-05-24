import { expect } from 'chai';
import { Request } from 'express';
import { makeGetAudioUploadUseCase } from '.';
import { AudioUploadEntityBuildResponse } from '../../../entities/audio-upload/audio-upload-entity';
import { makeAudioUploadTestFixture } from '../../../test-fixtures/audio-upload';
import { AudioUploadTestFixture } from '../../../test-fixtures/audio-upload/audio-upload-test-fixture';
import { UserData } from '../../../web-driver-callbacks/express/abstractions/i-http-request';
import { RouteData } from '../../abstractions/i-use-case';
import { makeControllerDataBuilder } from '../../utils/controller-data-builder';
import { ControllerDataBuilder } from '../../utils/controller-data-builder/controller-data-builder';
import { GetAudioUploadUseCase } from './get-audio-upload-use-case';

let getAudioUploadUseCase: GetAudioUploadUseCase;
let audioUploadTestFixture: AudioUploadTestFixture;
let controllerDataBuilder: ControllerDataBuilder;
let mockAudioUpload: AudioUploadEntityBuildResponse;
let routeData: RouteData;
let userData: UserData;

before(async () => {
  getAudioUploadUseCase = await makeGetAudioUploadUseCase;
  audioUploadTestFixture = await makeAudioUploadTestFixture;
  controllerDataBuilder = makeControllerDataBuilder;
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
    req: {} as Request,
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
    const getAudioUploadError = async (): Promise<Error> => {
      let error;
      try {
        await getAudioUpload();
      } catch (err) {
        error = err;
      }
      return error as Error;
    };
    context('valid inputs', () => {
      it('should get an audio upload with the given id', async () => {
        const audioUpload = await getAudioUpload();
        expect(audioUpload._id).to.deep.equal(routeData.params.audioUploadId);
      });
    });
    context('invalid inputs', () => {
      it('should throw an error if audio upload not found', async () => {
        routeData.params = {};
        const error = await getAudioUploadError();
        expect(error).to.have.property('message');
      });
    });
  });
});
