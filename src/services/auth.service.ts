import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UnauthorizedException from "../exceptions/unauthorized.exception";
import UserService from "./user.service";

class AuthService {
  /**
   * Authenticates user
   *
   * @param user email
   * @param user password
   * @returns LoginResonse
   *
   */

  async login(email: string, password: string) {
    const userService = new UserService();

    const user = await userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException();
    }

    const token = jwt.sign(
      { sub: user.id, iat: Date.now(), email: user.email },
      "churros"
    );

    return { token };
  }
}

export default AuthService;
