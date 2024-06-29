import { compare } from "bcryptjs";
import prismaClient from "../../database/prisma/prismaClient";
import { IUserLoginRequest } from "../../models/user/UserLogin";
import { sign } from "jsonwebtoken";

class UserLoginService {
  async execute({ email, password }: IUserLoginRequest) {
    const checkIfUserExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (!checkIfUserExists) {
      throw new Error("Credenciais incorretas.");
    }

    const checkPassword = await compare(password, checkIfUserExists.password);

    if (!checkPassword) {
      throw new Error("Credenciais incorretas.");
    }

    const token = sign(
      {
        name: checkIfUserExists.name,
        email: checkIfUserExists.email,
      },
      process.env.SECRET as string,
      {
        subject: checkIfUserExists.id.toString(),
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { UserLoginService };
