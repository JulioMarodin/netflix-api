import express from "express";

import { AuthController } from "../controllers";
import validationMiddleware from "../middlewares/validation.middleware";
import LoginSchema from "../schemas/login.schema";

const authRouter = express.Router();

authRouter.post(
  "/auth",
  validationMiddleware(LoginSchema),
  AuthController.login
);

export default authRouter;
