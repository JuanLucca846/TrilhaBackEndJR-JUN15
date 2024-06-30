import prismaClient from "../../database/prisma/prismaClient";
import { IFindTaskByIdRequest } from "../../models/task/FindTaskById";

class FindTaskByIdService {
  async execute({ id }: IFindTaskByIdRequest) {
    const findTaskById = await prismaClient.task.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        userId: true,
      },
    });

    return findTaskById;
  }
}

export { FindTaskByIdService };
