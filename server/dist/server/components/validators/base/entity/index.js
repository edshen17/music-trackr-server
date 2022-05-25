"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBaseEntityValidator = void 0;
const __1 = require("../..");
const base_entity_validator_1 = require("./base-entity-validator");
const makeBaseEntityValidator = new base_entity_validator_1.BaseEntityValidator().init({ joi: __1.joi });
exports.makeBaseEntityValidator = makeBaseEntityValidator;
