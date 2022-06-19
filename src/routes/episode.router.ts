import express from "express";
import passport from "passport";

import { EpisodeController } from "../controllers";
import validationMiddleware from "../middlewares/validation.middleware";
import CreateEpisodeSchema from "../schemas/create-episode.schema";

const EpisodeRouter = express.Router();

EpisodeRouter.post(
  "/episodes",
  passport.authenticate("jwt", { session: false }),
  validationMiddleware(CreateEpisodeSchema),
  EpisodeController.create
);

export default EpisodeRouter;
