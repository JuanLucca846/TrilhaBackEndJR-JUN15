import { NextFunction, Request, Response } from "express";
import { FindAllTasksService } from "../../service/task/findAllTasks.service";

class FindAllTasksController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const findAllTasksService = new FindAllTasksService();

    try {
      const tasks = await findAllTasksService.execute();

      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }
}

export { FindAllTasksController };
