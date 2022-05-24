import { expect } from 'chai';
import { Request } from 'express';
import { UserData } from '../../../web-driver-callbacks/express/abstractions/i-http-request';
import { RouteData } from '../../abstractions/i-use-case';
import { makeControllerDataBuilder } from '../../utils/controller-data-builder';
import { ControllerDataBuilder } from '../../utils/controller-data-builder/controller-data-builder';

let getAudioUploadUseCase: GetAudioUploadUseCase;
let controllerDataBuilder: ControllerDataBuilder;
let routeData: RouteData;
let userData: UserData;

before(async () => {
  getAudioUploadUseCase = await makeGetAudioUploadUseCase;
  controllerDataBuilder = makeControllerDataBuilder;
});

beforeEach(async () => {
  routeData = {
    body: {},
    path: '',
    query: {},
    params: {},
    headers: {},
    cookies: {},
    req: {} as Request,
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
    const createAudioUploadError = async (): Promise<Error> => {
      let error;
      try {
        await createAudioUpload();
      } catch (err) {
        error = err;
      }
      return error as Error;
    };
    context('valid inputs', () => {
      it('should return the saved audio upload', async () => {
        routeData.body = {
          userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          sourceUrl: 'https://fakeimg.pl/300/',
        };
        const audioUpload = await createAudioUpload();
        expect(audioUpload.userId).to.deep.equal(routeData.body.userId);
        expect(audioUpload.sourceUrl).to.deep.equal(routeData.body.sourceUrl);
      });
    });
    context('invalid inputs', () => {
      it('should throw an error if body is empty', async () => {
        const error = await createAudioUploadError();
        expect(error).to.have.property('message');
      });
      it('should throw an error if at least one value is incorrect', async () => {
        routeData.body = {
          userId: 'bad id',
          sourceUrl: 'https://fakeimg.pl/300/',
        };
        const error = await createAudioUploadError();
        expect(error.message).to.equal('"userId" must be a valid GUID');
      });
    });
  });
});
