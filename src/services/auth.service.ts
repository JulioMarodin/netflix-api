import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import UnauthorizedException from "../exceptions/unauthorized.exception";
import UserService from "./user.service";

dotenv.config();

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
    /**
     * Logs user in
     *
     * @param email user email
     * @param password user password
     * @returns LoginResponse
     *
     */
    const userService = new UserService();
    const secret = process.env.SECRET || "";

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
      secret
    );

    return { token };
  }
}

export default AuthService;
