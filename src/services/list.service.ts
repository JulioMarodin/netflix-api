import { Repository } from "typeorm";

import { Show } from "../entities";
import User from "../entities/user.entity";
import BadRequestException from "../exceptions/bad-request.exception";
import { AppDataSource } from "../infrastructure/database/data-source";

class ListService {
  userRepository: Repository<User>;
  showRepository: Repository<Show>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
    this.showRepository = AppDataSource.getRepository(Show);
  }

  private isMovieInList(showId: number, user: User) {
    return user.list.filter((show) => show.id === showId).length > 0;
  }

  async add(showId: number, user: User) {
    if (this.isMovieInList(showId, user)) {
      throw new BadRequestException("Show already in list");
    }

    const show = await this.showRepository.findOne({ where: { id: showId } });

    if (!show) {
      throw new BadRequestException(`Show id: ${showId} not found`);
    }

    user.list = [...user.list, show];

    return this.userRepository.save(user);
  }

  remove(showId: number, user: User) {
    const newUserList = user.list.filter((show) => show.id !== showId);

    return this.userRepository.save({ ...user, list: newUserList });
  }
}

export default ListService;
