import { Request, Response } from "express";

import Show from "../entities/show.entity";
import { CustomResponse } from "../interfaces/custom-response.interface";
import ShowService from "../services/show.service";

const showService = new ShowService();

class ShowController {
  public static async list(_: Request, res: CustomResponse) {
    try {
      const shows = await showService.list();

      res.send(shows);
    } catch (e) {
      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }

  public static async listOne(req: Request, res: CustomResponse) {
    try {
      const {
        params: { id },
      } = req;
      const shows = await showService.listOne(Number(id));

      res.send(shows);
    } catch (e) {
      if (res.errorHandler) {
        res.errorHandler(e, res);
      }
    }
  }

  public static async delete(req: Request, res: CustomResponse) {
    try {
      const {
        params: { id },
      } = req;
      const shows = await showService.delete(Number(id));

      res.send(shows);
    } catch (e) {
      if (res.errorHandler) {
        res.errorHandler(e, res);
      }
    }
  }

  public static async create(req: Request, res: CustomResponse) {
    try {
      const show: Show = req.body;

      const result = await showService.create(show);

      res.send(result);
    } catch (e) {
      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }
}

export default ShowController;
