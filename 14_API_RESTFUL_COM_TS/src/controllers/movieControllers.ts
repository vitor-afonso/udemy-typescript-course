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
  }
}
