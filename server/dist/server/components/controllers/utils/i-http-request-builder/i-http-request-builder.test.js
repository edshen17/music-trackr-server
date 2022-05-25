"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
let iHttpRequestBuilder;
before(async () => {
    iHttpRequestBuilder = _1.makeIHttpRequestBuilder;
});
describe('IHttpRequestBuilder', () => {
    describe('build', () => {
        it('should build an empty httpRequest from no inputs', () => {
            const httpRequest = iHttpRequestBuilder.build();
            (0, chai_1.expect)(httpRequest).to.deep.equal({
                body: {},
                path: '',
                query: {},
                params: {},
                userData: {
                    id: undefined,
                    token: undefined,
                },
                headers: {},
                cookies: {},
                req: {},
            });
        });
        it('should build a valid httpRequest from the given inputs', () => {
            const httpRequest = iHttpRequestBuilder
                .body({
                name: 'some name',
            })
                .path('/somePath')
                .query({})
                .params({})
                .cookies({})
                .build();
            (0, chai_1.expect)(httpRequest).to.deep.equal({
                body: {
                    name: 'some name',
                },
                path: '/somePath',
                query: {},
                params: {},
                userData: {
                    id: undefined,
                    token: undefined,
                },
                headers: {},
                cookies: {},
                req: {},
            });
        });
    });
});
