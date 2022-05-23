require('dotenv').config({ path: '.env' });
import express from 'express';
import { api } from './routes/api';

const app = express();
const port = 5000;

app.use('/api', api);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
