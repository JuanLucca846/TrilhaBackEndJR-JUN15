import { NextFunction, Request, Response } from "express";
import { DeleteTaskService } from "../../service/task/deleteTask.service";

class DeleteTaskController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const userId = Number(req.userId);

    const deleteTaskService = new DeleteTaskService();

    try {
      await deleteTaskService.execute({ id, userId });

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export { DeleteTaskController };
