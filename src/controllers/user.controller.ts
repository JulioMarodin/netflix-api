import { Request } from "express";

import HTTP_STATUS from "../enums/http-status.enum";
import { CustomResponse } from "../interfaces/custom-response.interface";
import UserService from "../services/user.service";

const userService = new UserService();

class UserController {
  public static async create(req: Request, res: CustomResponse) {
    const { body } = req;

    try {
      const user = await userService.create(body);

      res.status(HTTP_STATUS.CREATED).json({
        id: user.id,
        email: user.email,
      });
    } catch (e) {
      if (res.errorHandler) {
        console.log(`Create user error! Data: ${JSON.stringify(body)}`);

        res.errorHandler(e);
      }
    }
  }
}

export default UserController;
