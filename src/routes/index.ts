import express, { Application } from "express";
import morgan from "morgan";

import errorHandlerMiddlwrawe from "../middlewares/error-handler.middleware";
import showsRouter from "./shows.router";

const routes = [showsRouter];

const jsonParserMiddleware = express.json();

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware);
  app.use(morgan("tiny"));
  app.use(errorHandlerMiddlwrawe);
  app.use(routes);
}

export default startRoutes;
