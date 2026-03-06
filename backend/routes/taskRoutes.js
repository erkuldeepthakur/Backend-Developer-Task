const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get("/", auth, getTasks);

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create task
 *     responses:
 *       200:
 *         description: Task created
 */
router.post("/", auth, createTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.put("/:id", auth, updateTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 */
router.delete("/:id", auth, deleteTask);

module.exports = router;