require('dotenv').config();

import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morganMiddleware';

const app = express();

// everything that's "app.use()" is a middleware

// routes middleware
app.use(express.json());

// morgan logs to console http request results
app.use(morganMiddleware);

// adds /api/ to the beginning of all routes from ./router
app.use('/api/', router);

const port = config.get<number>('port');

app.listen(3000, async () => {
  await db();
  // using winston "Logger" to log to console and create log file
  Logger.info(`Listening on port: ${port}`);
});
