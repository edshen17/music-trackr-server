"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
let baseEntityValidator;
const props = {
    buildParams: {},
};
before(() => {
    baseEntityValidator = _1.makeBaseEntityValidator;
    props.buildParams = {};
});
describe('baseEntityValidator', () => {
    describe('validate', () => {
        const testValidInputs = (props) => {
            const { buildParams } = props;
            const validatedObj = baseEntityValidator.validate(props);
            (0, chai_1.expect)(validatedObj).to.deep.equal(buildParams);
            (0, chai_1.expect)(validatedObj).to.not.have.property('error');
        };
        const testInvalidInputs = (props) => {
            try {
                baseEntityValidator.validate(props);
            }
            catch (err) {
                (0, chai_1.expect)(err).be.an('error');
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
