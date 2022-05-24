import { expect } from 'chai';
import { makeAudioUploadEntityValidator } from '.';
import { AudioUploadEntityValidator } from './audio-upload-entity-validator';

let audioUploadEntityValidator: AudioUploadEntityValidator;
let props: {
  buildParams: {};
};

before(() => {
  audioUploadEntityValidator = makeAudioUploadEntityValidator;
  props = {
    buildParams: {
      userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      sourceUrl: 'https://fakeimg.pl/300/',
      fileName: 'some file name',
    },
  };
});

describe('audioUploadEntityValidator', () => {
  describe('validate', () => {
    const testValidInputs = (props: { buildParams: {} }) => {
      const { buildParams } = props;
      const validatedObj = audioUploadEntityValidator.validate(props);
      expect(validatedObj).to.deep.equal(buildParams);
      expect(validatedObj).to.not.have.property('error');
    };
    const testInvalidInputs = (props: { buildParams: {} }) => {
      try {
        audioUploadEntityValidator.validate(props);
      } catch (err) {
        expect(err).be.an('error');
      }
    };
    context('valid inputs', () => {
      it('should return a valid object', () => {
        testValidInputs(props);
      });
    });
    context('invalid inputs', () => {
      it('should throw an error', () => {
        props.buildParams = {
          someField: 'some value',
        };
        testInvalidInputs(props);
      });
      it('should throw an error', () => {
        props.buildParams = {
          sourceUrl: 'bad source',
        };
        testInvalidInputs(props);
      });
    });
  });
});
