import express from 'express';
import { audioUploads } from './audio-uploads';

const api = express.Router();

api.use('/audioUploads', audioUploads);

export { api };
