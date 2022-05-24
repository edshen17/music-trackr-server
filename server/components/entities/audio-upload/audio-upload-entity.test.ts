import { expect } from 'chai';
import { makeAudioUploadEntity } from '.';
import { AudioUploadEntity } from './audio-upload-entity';

let audioUploadEntity: AudioUploadEntity;

before(async () => {
  audioUploadEntity = await makeAudioUploadEntity;
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
        expect(audioEntity.userId).to.deep.equal(buildParams.userId);
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
        } catch (err) {
          expect(err).to.be.an('error');
        }
      });
    });
  });
});
