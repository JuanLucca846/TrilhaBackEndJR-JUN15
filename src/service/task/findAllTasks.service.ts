import prismaClient from "../../database/prisma/prismaClient";

class FindAllTasksService {
  async execute() {
    const findAllTasks = await prismaClient.task.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        userId: true,
      },
    });

    return findAllTasks;
  }
}

export { FindAllTasksService };
