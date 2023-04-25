import { Request, Response } from 'express';
import { MovieModel } from '../models/Movie';
import Logger from '../../config/logger';

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Something went wwrong: ${e.message}`);
    return res.status(500).json({ error: 'Please try again later.' });
  }
}
export async function findMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ error: 'The movie does not exist.' });
    }
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Something went wwrong: ${e.message}`);
    return res.status(500).json({ error: 'Please try again later.' });
  }
}
export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Something went wwrong: ${e.message}`);
    return res.status(500).json({ error: 'Please try again later.' });
  }
}
export async function removeMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findByIdAndRemove(id);
    if (!movie) {
      return res.status(404).json({ error: 'The movie does not exist.' });
    }
    return res.status(200).json({ msg: 'Movie successfully removed.' });
  } catch (e: any) {
    Logger.error(`Something went wwrong: ${e.message}`);
    return res.status(500).json({ error: 'Please try again later.' });
  }
}
export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedMovie = await MovieModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie does not exist.' });
    }
    return res.status(200).json({ msg: 'Movie successfully updated.', updatedMovie });
  } catch (e: any) {
    Logger.error(`Something went wwrong: ${e.message}`);
    return res.status(500).json({ error: 'Please try again later.' });
  }
}
