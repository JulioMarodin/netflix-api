import { Request, Response } from "express";

import Movie from "../entities/movie.entity";
import MovieService from "../services/movie.service";

const movieService = new MovieService();

class MovieController {
  public static async list(_: Request, res: Response) {
    const movieService = new MovieService();
    const movies = movieService.list();

    res.send(movies);
  }

  public static async create(req: Request, res: Response) {
    const movie: Movie = req.body;

    const result = await movieService.create(movie);

    res.send(result);
  }
}

export default MovieController;
