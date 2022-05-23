import { expect } from 'chai';
import { makeBaseQueryValidator } from '.';
import { BaseQueryValidator } from './base-query-validator';

let baseQueryValidator: BaseQueryValidator;

const props = {
  query: {},
};

before(() => {
  baseQueryValidator = makeBaseQueryValidator;
  props.query = {};
});

describe('baseQueryValidator', () => {
  describe('validate', () => {
    const testValidInputs = (props: { query: {} }) => {
      const { query } = props;
      const validatedObj = baseQueryValidator.validate(props);
      expect(validatedObj).to.deep.equal(query);
      expect(validatedObj).to.not.have.property('error');
    };
    const testInvalidInputs = (props: { query: {} }) => {
      try {
        baseQueryValidator.validate(props);
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
        props.query = {
          someField: 'some value',
        };
        testInvalidInputs(props);
      });
    });
  });
});
