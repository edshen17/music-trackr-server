"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const audio_uploads_1 = require("./audio-uploads");
const api = express_1.default.Router();
exports.api = api;
api.use('/audioUploads', audio_uploads_1.audioUploads);
