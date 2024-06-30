import { NextFunction, Request, Response } from "express";
import { FindAllUserTasksService } from "../../service/task/findAllUserTasks.service";

class FindAllUserTasksController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const userId = Number(req.userId);

    const findAllUserTasksService = new FindAllUserTasksService();

    try {
      const task = await findAllUserTasksService.execute({ userId });

      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }
}

export { FindAllUserTasksController };
