import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validationMiddleware =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (e: any) {
      res.status(401).json({ error: true, message: e.message });
    }
  };

export default validationMiddleware;
