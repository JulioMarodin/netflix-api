import { Repository } from "typeorm";

import { AppDataSource } from "../../configs/database/data-source";
import Movie from "../entities/movie.entity";

class MovieService {
  private movieRespository: Repository<Movie>;

  constructor() {
    this.movieRespository = AppDataSource.getRepository(Movie);
  }

  list() {
    return this.movieRespository.find();
  }

  create(movie: Movie) {
    const movieEntity = this.movieRespository.create(movie);

    return this.movieRespository.save(movieEntity);
  }
}

export default MovieService;
