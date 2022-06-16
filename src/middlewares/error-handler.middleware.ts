import { Response } from "express";

const handleError = (e: any, res: Response) => {
  res.status(e.status).json({ error: true, message: e.message });
};

export default handleError;
