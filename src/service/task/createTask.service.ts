import prismaClient from "../../database/prisma/prismaClient";
import { ICreateTaskRequest } from "../../models/task/Task";

class CreateTaskService {
  async execute({ title, description, status, userId }: ICreateTaskRequest) {
    const newTask = await prismaClient.task.create({
      data: {
        title,
        description,
        status,
        userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        userId: true,
      },
    });

    return newTask;
  }
}

export { CreateTaskService };
