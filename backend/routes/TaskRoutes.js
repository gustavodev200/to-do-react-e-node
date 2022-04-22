const router = require('express').Router()

const TaskController = require('../controllers/TaskController')

const verifyToken = require('../helpers/verify-token')

router.post('/create', verifyToken, TaskController.createTasks)
router.get('/mytasks', verifyToken, TaskController.getAllUserTasks)
router.get('/:id', TaskController.getTaskById)
router.patch('/:id', verifyToken, TaskController.editTasks)
router.delete('/:id', verifyToken, TaskController.removeTasks)
router.patch('/checked/:id', verifyToken, TaskController.checkedTasks)

module.exports = router;