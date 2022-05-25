"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBaseQueryValidator = void 0;
const __1 = require("../..");
const base_query_validator_1 = require("./base-query-validator");
const makeBaseQueryValidator = new base_query_validator_1.BaseQueryValidator().init({ joi: __1.joi });
exports.makeBaseQueryValidator = makeBaseQueryValidator;
