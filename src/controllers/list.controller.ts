import UnauthorizedException from "../exceptions/unauthorized.exception";
import { CustomResponse, CustomRequest } from "../interfaces";
import ListService from "../services/list.service";
import UserService from "../services/user.service";

const listService = new ListService();
const userService = new UserService();

class ListController {
  public static async list(req: CustomRequest, res: CustomResponse) {
    try {
      const myList = req.loggedUser?.list;

      res.json(myList);
    } catch (e) {
      console.log(req.loggedUser);
      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }

  public static async add(req: CustomRequest, res: CustomResponse) {
    const {
      body: { showId },
      loggedUser,
    } = req;

    try {
      if (!loggedUser) {
        throw new UnauthorizedException();
      }

      const added = await listService.add(showId, loggedUser);

      res.json(added);
    } catch (e) {
      console.log(
        `Erro while saving to list! Data: ${JSON.stringify(req.loggedUser)}`
      );

      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }

  public static async remove(req: CustomRequest, res: CustomResponse) {
    const {
      params: { showId },
      loggedUser,
    } = req;

    try {
      if (!loggedUser) {
        throw new UnauthorizedException();
      }

      const removed = await listService.remove(Number(showId), loggedUser);

      res.json(removed);
    } catch (e) {
      console.log(
        `Error while removing from list! Data: ${JSON.stringify(
          req.loggedUser
        )}`
      );

      if (res.errorHandler) {
        res.errorHandler(e);
      }
    }
  }
}

export default ListController;
