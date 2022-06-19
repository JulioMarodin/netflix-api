import { NextFunction, Request } from "express";
import { Schema } from "joi";

import ValidationException from "../exceptions/validation.exception";
import { CustomResponse } from "../interfaces/custom-response.interface";

const validationMiddleware =
  (schema: Schema) =>
  async (req: Request, res: CustomResponse, next: NextFunction) => {
    try {
      const validated = await schema.validateAsync(req.body, {
        abortEarly: false,
      });

      if (validated.error) {
        throw new ValidationException(
          "Campos inválidos",
          validated.error?.details
        );
      }

      next();
    } catch (e: any) {
      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  };

export default validationMiddleware;
