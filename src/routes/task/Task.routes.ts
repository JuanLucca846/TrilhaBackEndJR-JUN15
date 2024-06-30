import { Router } from "express";
import { CreateTaskController } from "../../controllers/task/createTask.controller";
import { isUserAuthenticated } from "../../middlewares/isUserAuthenticated";
import { FindAllTasksController } from "../../controllers/task/findAllTasks.controller";
import { FindTaskByIdController } from "../../controllers/task/findTaskById.controller";
import { FindAllUserTasksController } from "../../controllers/task/findAllUserTasks.controller";
import { UpdateTaskController } from "../../controllers/task/updateTask.controller";
import { DeleteTaskController } from "../../controllers/task/deleteTask.controller";

const taskRoutes: Router = Router();

taskRoutes.post(
  "/task",
  isUserAuthenticated,
  new CreateTaskController().handle
);

taskRoutes.get(
  "/tasks",
  isUserAuthenticated,
  new FindAllTasksController().handle
);

taskRoutes.get(
  "/task/:id",
  isUserAuthenticated,
  new FindTaskByIdController().handle
);

taskRoutes.get(
  "/userTasks",
  isUserAuthenticated,
  new FindAllUserTasksController().handle
);

taskRoutes.put(
  "/task/:id",
  isUserAuthenticated,
  new UpdateTaskController().handle
);

taskRoutes.delete(
  "/task/:id",
  isUserAuthenticated,
  new DeleteTaskController().handle
);

export default taskRoutes;
