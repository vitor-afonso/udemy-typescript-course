import { Router, Request, Response } from 'express';
import { createMovie, getAllMovies, findMovieById, removeMovie, updateMovie } from './controllers/movieControllers';
import { validate } from './middleware/handleValidation';
import { movieCreateValidation, movieUpdateValidation } from './middleware/movieValidation';

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).send('API working!');
  })
  // validate will process the array of errors coming from movieCreateValidation
  // if everything is fine the movie is created
  .post('/movie', movieCreateValidation(), validate, createMovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', movieUpdateValidation(), validate, updateMovie);
