"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
let controllerDataBuilder;
before(() => {
    controllerDataBuilder = _1.makeControllerDataBuilder;
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
                req: {},
            };
            const controllerData = controllerDataBuilder.userData(userData).routeData(routeData).build();
            (0, chai_1.expect)(controllerData.userData).to.deep.equal(userData);
            (0, chai_1.expect)(controllerData.routeData).to.deep.equal(routeData);
        });
    });
});
