import express, { Application } from "express";
import morgan from "morgan";

import errorHandlerMiddlwrawe from "../middlewares/error-handler.middleware";
import authRouter from "./auth.router";
import showsRouter from "./shows.router";
import UserRouter from "./user.router";

const routes = [showsRouter, authRouter, UserRouter];

const jsonParserMiddleware = express.json();

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware);
  app.use(morgan("tiny"));
  app.use(errorHandlerMiddlwrawe);
  app.use(routes);
}

export default startRoutes;
