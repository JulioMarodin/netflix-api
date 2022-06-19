import { Request } from "express";

import HTTP_STATUS from "../enums/http-status.enum";
import { CustomResponse } from "../interfaces/custom-response.interface";
import EpisodeService from "../services/episode.service";

const episodeService = new EpisodeService();

class EpisodeController {
  public static async create(req: Request, res: CustomResponse) {
    try {
      const { body } = req;

      const createsEpisode = await episodeService.create(body);

      res.status(HTTP_STATUS.CREATED).json(createsEpisode);
    } catch (e) {
      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }
}

export default EpisodeController;
