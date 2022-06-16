import express from "express";

import { ShowController } from "../controllers";
import validationMiddleware from "../middlewares/validation.middleware";
import CreateShowSchema from "../schemas/create-show.schema";

const showsRouter = express.Router();

showsRouter.get("/shows", ShowController.list);

showsRouter.get("/shows/:id", ShowController.listOne);

showsRouter.delete("/shows/:id", ShowController.delete);

showsRouter.post(
  "/shows",
  validationMiddleware(CreateShowSchema),
  ShowController.create
);

export default showsRouter;
