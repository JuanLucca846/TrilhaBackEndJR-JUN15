import prismaClient from "../../database/prisma/prismaClient";
import { IDeleteTaskRequest } from "../../models/task/DeleteTask";

class DeleteTaskService {
  async execute({ id, userId }: IDeleteTaskRequest) {
    const checkIfTaskExists = await prismaClient.task.findUnique({
      where: { id },
    });

    if (!checkIfTaskExists) {
      throw new Error("Task inexistente.");
    }

    if (checkIfTaskExists.userId !== userId) {
      throw new Error("Você não pode excluir essa task.");
    }

    await prismaClient.task.delete({
      where: {
        id,
      },
    });
  }
}

export { DeleteTaskService };
