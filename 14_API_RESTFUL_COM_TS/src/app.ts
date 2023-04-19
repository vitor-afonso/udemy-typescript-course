require('dotenv').config();

import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';

const app = express();

// routes middleware
app.use(express.json());

// adds /api/ to the beginning of all routes from ./router
app.use('/api/', router);

const port = config.get<number>('port');

app.listen(3000, async () => {
  await db();
  console.log(`Listening on port: ${port}`);
});
