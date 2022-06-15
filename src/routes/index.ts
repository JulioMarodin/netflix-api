import express, { Application } from "express";

import moviesRouter from "./movies.router";

const routes = [moviesRouter];

const jsonParserMiddleware = express.json();

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware);
  app.use(routes);
}

export default startRoutes;
