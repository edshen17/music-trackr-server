import { joi } from '../..';
import { BaseQueryValidator } from './base-query-validator';

const makeBaseQueryValidator = new BaseQueryValidator().init({ joi });

export { makeBaseQueryValidator };
