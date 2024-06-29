import { NextFunction, Request, Response } from "express";
import { UserLoginService } from "../../service/user/userLogin.service";

class UserLoginController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const userLoginService = new UserLoginService();

    try {
      const login = await userLoginService.execute({
        email,
        password,
      });

      return res.status(200).json({ token: login });
    } catch (error) {
      next(error);
    }
  }
}

export { UserLoginController };
