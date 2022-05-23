import { expect } from 'chai';
import { makeBaseEntityValidator } from '.';
import { BaseEntityValidator } from './base-entity-validator';

let baseEntityValidator: BaseEntityValidator;

const props = {
  buildParams: {},
};

before(() => {
  baseEntityValidator = makeBaseEntityValidator;
  props.buildParams = {};
});

describe('baseEntityValidator', () => {
  describe('validate', () => {
    const testValidInputs = (props: { buildParams: {} }) => {
      const { buildParams } = props;
      const validatedObj = baseEntityValidator.validate(props);
      expect(validatedObj).to.deep.equal(buildParams);
      expect(validatedObj).to.not.have.property('error');
    };
    const testInvalidInputs = (props: { buildParams: {} }) => {
      try {
        baseEntityValidator.validate(props);
      } catch (err) {
        expect(err).be.an('error');
      }
    };
    context('valid inputs', () => {
      it('should return an empty object', () => {
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
    });
  });
});
