import prismaClient from "../../database/prisma/prismaClient";
import { IUserRequest } from "../../models/user/User";
import bcrypt from "bcryptjs";

class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    const checkIfUserExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (checkIfUserExists) {
      throw new Error("Esse usuário já existe.");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return newUser;
  }
}

export { CreateUserService };
