import { Router } from "express";
import { CreateUserController } from "../../controllers/user/createUser.controller";
import { UserLoginController } from "../../controllers/user/loginUser.controller";
import { createUserSchema } from "../../models/schemas/user/user.schema";
import { createValidator } from "express-joi-validation";
import { userLoginSchema } from "../../models/schemas/user/userLogin.schema";

const userRoutes: Router = Router();
const validator = createValidator();

userRoutes.post(
  "/createUser",
  validator.body(createUserSchema),
  new CreateUserController().handle
);
userRoutes.post(
  "/login",
  validator.body(userLoginSchema),
  new UserLoginController().handle
);

export default userRoutes;
