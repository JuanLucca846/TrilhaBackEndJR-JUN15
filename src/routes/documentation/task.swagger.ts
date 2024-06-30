/**
 * @swagger
 * securityDefinitions:
 *   Authorization:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */

/**
 * @swagger
 *  /api/v1/task:
 *   post:
 *     tags:
 *       - tasks
 *     description: Criar task
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: Task
 *         description: Criar uma task
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: Criando uma task
 *             description:
 *               type: string
 *               example: Criei essa task para lembrar das tarefas de amanhã
 *             status:
 *               type: string
 *               example: task iniciada
 *     responses:
 *       201:
 *         description: Success
 *       400:
 *         description: Bad Request
 *     security:
 *       - Authorization: []
 */

/**
 * @swagger
 *  /api/v1/tasks:
 *   get:
 *     tags:
 *         - tasks
 *     description: Buscar todas tasks
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *     security:
 *       - Authorization: []
 */

/**
 * @swagger
 *  /api/v1/task/{id}:
 *   get:
 *     tags:
 *         - tasks
 *     description: Buscar task por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Buscar task por ID
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *     security:
 *       - Authorization: []
 */

/**
 * @swagger
 *  /api/v1/userTasks:
 *   get:
 *     tags:
 *         - tasks
 *     description: Buscar todas tasks do usuário
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *     security:
 *       - Authorization: []
 */

/**
 * @swagger
 *  /api/v1/task/{id}:
 *   put:
 *     tags:
 *         - tasks
 *     description: Atualizar task por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Atualizar task por ID
 *         required: true
 *       - in: body
 *         name: Task
 *         description: Update a task
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: Atualizando uma task
 *             description:
 *               type: string
 *               example: Atualizando a task
 *             status:
 *               type: string
 *               example: task finalizada
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *     security:
 *       - Authorization: []
 */

/**
 * @swagger
 *  /api/v1/task/{id}:
 *   delete:
 *     tags:
 *         - tasks
 *     description: Delete task by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Task ID
 *         required: true
 *     responses:
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 *     security:
 *       - Authorization: []
 */
