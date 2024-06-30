import { NextFunction, Request, Response } from "express";
import { UpdateTaskService } from "../../service/task/updateTask.service";

class UpdateTaskController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { title, description, status } = req.body;
    const id = Number(req.params.id);
    const userId = Number(req.userId);

    const updateTaskService = new UpdateTaskService();

    try {
      const updatedTask = await updateTaskService.execute({
        id,
        title,
        description,
        status,
        userId,
      });

      return res.status(200).json(updatedTask);
    } catch (error) {
      next(error);
    }
  }
}

export { UpdateTaskController };
