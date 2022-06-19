import express from "express";
import passport from "passport";

import { ShowController } from "../controllers";
import validationMiddleware from "../middlewares/validation.middleware";
import CreateShowSchema from "../schemas/create-show.schema";

const showsRouter = express.Router();

showsRouter.get(
  "/shows",
  passport.authenticate("jwt", { session: false }),
  ShowController.list
);

showsRouter.get(
  "/shows/:id",
  passport.authenticate("jwt", { session: false }),
  ShowController.listOne
);

showsRouter.delete(
  "/shows/:id",
  passport.authenticate("jwt", { session: false }),
  ShowController.delete
);

showsRouter.post(
  "/shows",
  passport.authenticate("jwt", { session: false }),
  validationMiddleware(CreateShowSchema),
  ShowController.create
);

export default showsRouter;
