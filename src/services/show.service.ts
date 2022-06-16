import { Repository } from "typeorm";

import { AppDataSource } from "../../configs/database/data-source";
import { Show } from "../entities";
import NotFoundException from "../exceptions/not-found.exception";

class ShowService {
  private showRepository: Repository<Show>;

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show);
  }

  /**
   * Returns all shows
   *
   * @returns all shows
   *
   * @beta
   */
  list() {
    return this.showRepository.find();
  }

  /**
   * Returns a show by id
   *
   * @returns a show by id
   *
   * @beta
   */
  async listOne(id: number) {
    const show = await this.showRepository.findOne({ where: { id } });

    if (show) {
      return show;
    }

    throw new NotFoundException(`Show with id: ${id} not found`);
  }

  /**
   * Delete a show by id
   *
   * @returns deleted show
   *
   * @beta
   */
  async delete(id: number) {
    const show = await this.showRepository.delete(id);

    if (show.affected) {
      return show;
    }

    throw new NotFoundException(`Show with id: ${id} not found`);
  }

  /**
   * Create a show
   *
   * @returns created show
   *
   */
  create(show: Show) {
    const showEntity = this.showRepository.create(show);

    return this.showRepository.save(showEntity);
  }
}

export default ShowService;
