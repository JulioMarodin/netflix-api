import { NextFunction, Request, Response } from "express";

export interface CustomResponse extends Response {
  handle?: Function;
}

const errorHandlerMiddlwrawe = (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  res.handle = (e: any) => {
    res.status(e.status).json({ error: true, message: e.message });
  };

  next();
};

export default errorHandlerMiddlwrawe;
