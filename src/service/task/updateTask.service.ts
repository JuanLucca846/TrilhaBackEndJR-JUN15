import prismaClient from "../../database/prisma/prismaClient";
import { IUpdateTaskRequest } from "../../models/task/UpdateTask";

class UpdateTaskService {
  async execute({
    id,
    title,
    description,
    status,
    userId,
  }: IUpdateTaskRequest) {
    const checkIfTaskExists = await prismaClient.task.findFirst({
      where: {
        id,
      },
    });

    if (!checkIfTaskExists) {
      throw new Error("Task inexistente.");
    }

    if (checkIfTaskExists.userId !== userId) {
      throw new Error("Você não pode atualizar essa task.");
    }

    const updatedTask = await prismaClient.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        status,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        userId: true,
      },
    });

    return updatedTask;
  }
}

export { UpdateTaskService };
