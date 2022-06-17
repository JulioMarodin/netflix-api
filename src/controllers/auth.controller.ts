import { Request } from "express";

import { CustomResponse } from "../interfaces/custom-response.interface";
import AuthService from "../services/auth.service";

const authService = new AuthService();

class AuthController {
  public static async login(req: Request, res: CustomResponse) {
    const {
      body: { email, password },
    } = req;

    try {
      const authenticated = await authService.login(email, password);

      res.send(authenticated);
    } catch (e) {
      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }
}

export default AuthController;
