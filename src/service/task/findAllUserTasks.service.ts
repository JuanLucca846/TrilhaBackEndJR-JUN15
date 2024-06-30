import prismaClient from "../../database/prisma/prismaClient";
import { IFindAllUserTasksRequest } from "../../models/task/FindAllUserTasks";

class FindAllUserTasksService {
  async execute({ userId }: IFindAllUserTasksRequest) {
    const userTasks = await prismaClient.task.findMany({
      where: {
        userId,
      },
      select: {
        userId: true,
        id: true,
        title: true,
        description: true,
        status: true,
      },
    });

    return userTasks;
  }
}

export { FindAllUserTasksService };
