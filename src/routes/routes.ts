import { Router } from "express";
import userRoutes from "./user/User.routes";
import taskRoutes from "./task/Task.routes";

const routes = Router();

routes.use(userRoutes);
routes.use(taskRoutes);

export default routes;
