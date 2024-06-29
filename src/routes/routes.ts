import { Router } from "express";
import userRoutes from "./user/User.routes";

const routes = Router();

routes.use(userRoutes);

export default routes;
