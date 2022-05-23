import { joi } from '../..';
import { BaseEntityValidator } from './base-entity-validator';

const makeBaseEntityValidator = new BaseEntityValidator().init({ joi });

export { makeBaseEntityValidator };
