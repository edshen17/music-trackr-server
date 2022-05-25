require('dotenv').config({ path: '.env' });
import compression from 'compression';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import { api } from './routes/api';
import { IS_PRODUCTION } from './constants';

const app = express();
const corsConfig = {
  origin: true,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.enable('trust proxy');
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(compression());
app.use('/api', api);

if (IS_PRODUCTION) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
  // static folder
  app.use(express.static(__dirname + '/public/'));

  // handle spa
  app.get(/.*/, (req: Request, res: Response) => res.sendFile(__dirname + '/public/index.html'));
}

app.use(express.static('public'));
const port = process.env.PORT || 5000;

http.createServer(app).listen(port, function () {
  console.log(`Express server listening on port ${port}`);
});
