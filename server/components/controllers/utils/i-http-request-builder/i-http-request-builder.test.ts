import { expect } from 'chai';
import { makeIHttpRequestBuilder } from '.';
import { IHttpRequestBuilder } from './i-http-request-builder';

let iHttpRequestBuilder: IHttpRequestBuilder;

before(async () => {
  iHttpRequestBuilder = makeIHttpRequestBuilder;
});

describe('IHttpRequestBuilder', () => {
  describe('build', () => {
    it('should build an empty httpRequest from no inputs', () => {
      const httpRequest = iHttpRequestBuilder.build();
      expect(httpRequest).to.deep.equal({
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

      expect(httpRequest).to.deep.equal({
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
