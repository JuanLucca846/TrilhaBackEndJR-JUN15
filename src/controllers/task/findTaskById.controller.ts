import { NextFunction, Request, Response } from "express";
import { FindTaskByIdService } from "../../service/task/findTaskById.service";

class FindTaskByIdController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);

    const findTaskByIdService = new FindTaskByIdService();

    try {
      const task = await findTaskByIdService.execute({ id });

      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }
}

export { FindTaskByIdController };
