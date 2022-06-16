import { Request, Response } from "express";

import Show from "../entities/show.entity";
import handleError from "../middlewares/error-handler.middleware";
import ShowService from "../services/show.service";

const showService = new ShowService();

class ShowController {
  public static async list(_: Request, res: Response) {
    const shows = await showService.list();

    res.send(shows);
  }

  public static async listOne(req: Request, res: Response) {
    try {
      const {
        params: { id },
      } = req;
      const shows = showService.listOne(Number(id));

      res.send(shows);
    } catch (e) {
      handleError(e, res);
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const {
        params: { id },
      } = req;
      const shows = showService.delete(Number(id));

      res.send(shows);
    } catch (e) {
      handleError(e, res);
    }
  }

  public static async create(req: Request, res: Response) {
    const show: Show = req.body;

    const result = await showService.create(show);

    res.send(result);
  }
}

export default ShowController;
