import { expect } from 'chai';
import { Request } from 'express';
import { makeControllerDataBuilder } from '.';
import { ControllerDataBuilder } from './controller-data-builder';

let controllerDataBuilder: ControllerDataBuilder;

before(() => {
  controllerDataBuilder = makeControllerDataBuilder;
});

describe('controllerDataBuilder', () => {
  describe('build', () => {
    it('should build a valid ControllerData object with user and route data', async () => {
      const userData = {
        token: 'some auth token',
        id: 'some user Id',
      };
      const routeData = {
        params: {
          uId: 'some uid',
        },
        body: {
          someBody: {},
        },
        query: {
          query: 'some query',
        },
        path: '',
        headers: {},
        cookies: {},
        req: {} as Request,
      };
      const controllerData = controllerDataBuilder.userData(userData).routeData(routeData).build();
      expect(controllerData.userData).to.deep.equal(userData);
      expect(controllerData.routeData).to.deep.equal(routeData);
    });
  });
});
