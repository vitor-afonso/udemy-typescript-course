// 1 -  iniciando projecto

//console.log('Express + TS');

// 2 - init express

import express from 'express';

const app = express();

// 3 - rota com POST

// to allow our app to work with json format
app.use(express.json());

app.get('/', async (req, res, next) => {
  try {
    res.send('Hello from the backend!');
  } catch (error) {
    console.log(error);
  }
});

// 3 - rota com POST
app.post('/api/product', async (req, res) => {
  try {
    console.log('POST req.body =>', req.body);
    res.send('Product added.');
  } catch (error) {
    console.log(error);
  }
});

// 4 - rota para todos os verbos
app.all('/api/product/check', async (req, res) => {
  try {
    if (req.method === 'POST') {
      console.log('POST req.body =>', req.body);
      return res.send('Product added.');
    } else if (req.method === 'GET') {
      console.log('GET request');
      return res.send('Product retrieved.');
    } else {
      return res.send('Impossible to perform operation.');
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
