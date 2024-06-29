import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "../../service/user/createUser.service";

class CreateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.execute({
        name,
        email,
        password,
      });

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export { CreateUserController };
