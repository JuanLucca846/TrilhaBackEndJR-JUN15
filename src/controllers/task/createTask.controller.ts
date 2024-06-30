import { NextFunction, Request, Response } from "express";
import { CreateTaskService } from "../../service/task/createTask.service";

class CreateTaskController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { title, description, status } = req.body;

    const userId = Number(req.userId);

    const createTaskService = new CreateTaskService();

    try {
      const task = await createTaskService.execute({
        title,
        description,
        status,
        userId,
      });

      return res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateTaskController };
