// 1 -  iniciando projecto

//console.log('Express + TS');

// 2 - init express

import express, { NextFunction, Request, Response } from 'express';

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
      res.send('Product added.');
    } else if (req.method === 'GET') {
      console.log('GET request');
      res.send('Product retrieved.');
    } else {
      res.send('Impossible to perform operation.');
    }
  } catch (error) {
    console.log(error);
  }
});

// 5 - interfaces do express

app.get('/api/interfaces', async (req: Request, res: Response) => {
  try {
    res.send('Using TypeScrip interfaces');
  } catch (error) {
    console.log(error);
  }
});

// 6 - enviando json

app.get('/api/json', async (req: Request, res: Response) => {
  try {
    return res.json({
      name: 'Shirt',
      price: 19.9,
      color: 'blue',
      sizes: ['M', 'S', 'L'],
    });
  } catch (error) {
    console.log(error);
  }
});

// 7 - router parameters

app.get('/api/product/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = { id: '7', name: 'Some good stuff', price: 99 };
    if (id === '7') {
      res.status(200).json(product);
    } else {
      res.send('Product not found.');
    }
  } catch (error) {
    console.log(error);
  }
});

// 8 - rotas complexas

app.get('/api/product/:id/review/:reviewId', async (req: Request, res: Response) => {
  try {
    const { id, reviewId } = req.params;

    res.send(`Getting review ${reviewId} from product ${id}.`);
  } catch (error) {
    console.log(error);
  }
});

// 9 - router handler

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    res.send(`Getting user with id ${id}.`);
  } catch (error) {
    console.log(error);
  }
};
app.get('/api/user/:id', getUser);

// 10 - middleware

const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (id === '10') {
    console.log('Access granted');
    next();
  } else {
    res.send('Access Denied');
  }
};

app.get('/api/user/:id/access', checkUser, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    res.json({ msg: 'Wellcome to the admin area.' });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
