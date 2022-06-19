import bcrypt from "bcrypt";
import { Repository } from "typeorm";

import User from "../entities/user.entity";
import BadRequestException from "../exceptions/bad-request.exception";
import { AppDataSource } from "../infrastructure/database/data-source";
import { createUserDTO } from "../interfaces/user-dto.interface";

class UserService {
  userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  private async isEmailInDatabase(email: string) {
    const userFound = await this.userRepository.findOne({ where: { email } });

    return !!userFound;
  }

  async getUserByEmail(email: string) {
    const userFound = await this.userRepository.findOne({ where: { email } });

    return userFound;
  }

  /**
   * Creates user
   *
   * @param createUserDTO user data
   * @returns user created
   *
   */
  async create(createUserDTO: createUserDTO) {
    const { email, password } = createUserDTO;
    const isEmailInDatabase = await this.isEmailInDatabase(email);

    if (isEmailInDatabase) {
      throw new BadRequestException("User already in database");
    }

    const SALT = 10;

    const newUserPayload = {
      email,
      password: await bcrypt.hash(password, SALT),
    };

    return this.userRepository.save(newUserPayload);
  }
}

export default UserService;
