"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
let audioUploadEntity;
before(async () => {
    audioUploadEntity = await _1.makeAudioUploadEntity;
});
describe('audioUploadEntity', () => {
    describe('build', () => {
        context('given valid inputs', () => {
            it('should create an entity', async () => {
                const buildParams = {
                    userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
                    sourceUrl: 'https://fakeimg.pl/300/',
                    fileName: 'some file name',
                };
                const audioEntity = await audioUploadEntity.build(buildParams);
                (0, chai_1.expect)(audioEntity.userId).to.deep.equal(buildParams.userId);
            });
        });
        context('given invalid inputs', () => {
            it('should throw an error', async () => {
                try {
                    audioUploadEntity.build({
                        userId: 'bad id',
                        sourceUrl: '',
                        fileName: 'some file name',
                    });
                }
                catch (err) {
                    (0, chai_1.expect)(err).to.be.an('error');
                }
            });
        });
    });
});
