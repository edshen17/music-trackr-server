"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = require(".");
let audioUploadEntityValidator;
let props;
before(() => {
    audioUploadEntityValidator = _1.makeAudioUploadEntityValidator;
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
        const testValidInputs = (props) => {
            const { buildParams } = props;
            const validatedObj = audioUploadEntityValidator.validate(props);
            (0, chai_1.expect)(validatedObj).to.deep.equal(buildParams);
            (0, chai_1.expect)(validatedObj).to.not.have.property('error');
        };
        const testInvalidInputs = (props) => {
            try {
                audioUploadEntityValidator.validate(props);
            }
            catch (err) {
                (0, chai_1.expect)(err).be.an('error');
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
