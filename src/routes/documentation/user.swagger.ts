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
 *  /api/v1/signUp:
 *   post:
 *     tags:
 *       - user
 *     description: Criar usuário
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: User
 *         description: Criar um usuário
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: Root
 *             email:
 *               type: string
 *               example: root@root.com
 *             password:
 *               type: string
 *               example: rootroot
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

/**
 * @swagger
 *  /api/v1/login:
 *   post:
 *     tags:
 *       - user
 *     description: Login
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: User
 *         description: Login usuário
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               example: root@root.com
 *             password:
 *               type: string
 *               example: rootroot
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
