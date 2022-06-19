import { NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";

import User from "../entities/user.entity";
import UnauthorizedException from "../exceptions/unauthorized.exception";
import { AppDataSource } from "../infrastructure/database/data-source";
import { CustomRequest } from "../interfaces/custom-request.interface";
import { CustomResponse } from "../interfaces/custom-response.interface";

const injectUser = async (
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new UnauthorizedException();
  }

  const userRepository = AppDataSource.getRepository(User);
  const secret = process.env.SECRET || "";
  const payload = await jsonwebtoken.verify(token, secret);

  if (!payload.sub) {
    throw new UnauthorizedException();
  }

  const loggedUser = await userRepository.findOne({
    where: { id: Number(payload.sub) },
  });

  if (!loggedUser) {
    throw new UnauthorizedException();
  }

  req.loggedUser = loggedUser;

  next();
};

export default injectUser;
