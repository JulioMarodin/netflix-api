import express, { Application } from "express";
import morgan from "morgan";

import errorHandlerMiddleware from "../middlewares/error-handler.middleware";
import authRouter from "./auth.router";
import EpisodeRouter from "./episode.router";
import showsRouter from "./shows.router";
import UserRouter from "./user.router";

const routes = [showsRouter, authRouter, UserRouter, EpisodeRouter];

const jsonParserMiddleware = express.json();

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware);
  app.use(morgan("tiny"));
  app.use(errorHandlerMiddleware);
  app.use(routes);
}

export default startRoutes;
