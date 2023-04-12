// 1 -  iniciando projecto

//console.log('Express + TS');

// 2 - init express

import express from 'express';

const app = express();

app.get('/', async (req, res, next) => {
  try {
    res.send('Hello from the backend!');
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
