import "reflect-metadata";
import express, { Request, Response } from "express";

import databaseInitializer, {
  AppDataSource,
} from "../configs/database/data-source";
import Movie from "./entities/movie.entity";

const app = express();

const PORT = 3000;

databaseInitializer();

app.get("/movies", async (req: Request, res: Response) => {
  const moviesRepository = AppDataSource.getRepository(Movie);
  const movies = await moviesRepository.find();

  res.send(movies);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
