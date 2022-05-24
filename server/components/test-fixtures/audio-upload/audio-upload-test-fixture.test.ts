import { expect } from 'chai';
import { makeAudioUploadTestFixture } from '.';
import { AudioUploadTestFixture } from './audio-upload-test-fixture';

let audioUploadTestFixture: AudioUploadTestFixture;

before(async () => {
  audioUploadTestFixture = await makeAudioUploadTestFixture;
});

describe('audioUploadTestFixture', () => {
  describe('createMockData', () => {
    it('should create a mock audio upload with the given properties', async () => {
      const mockAudioUpload = await audioUploadTestFixture.createMockData({
        userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        sourceUrl: 'https://fakeimg.pl/300/',
        fileName: 'some file name',
      });
      expect(mockAudioUpload).to.have.property('fileName');
    });
  });
  describe('createFakeDbUser', () => {
    it('should create a mock audio upload with a random id', async () => {
      const mockAudioUpload = await audioUploadTestFixture.createMockData();
      expect(mockAudioUpload).to.have.property('_id');
    });
  });
});
