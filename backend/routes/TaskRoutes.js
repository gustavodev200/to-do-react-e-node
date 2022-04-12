const router = require('express').Router()

const TaskController = require('../controllers/TaskController')

const verifyToken = require('../helpers/verify-token')

router.post('/create', verifyToken, TaskController.createTasks)
router.patch('/:id', verifyToken, TaskController.editTasks)
router.delete('/:id', verifyToken, TaskController.removeTasks)
router.patch('/checked/:id', verifyToken, TaskController.checkedTasks)

module.exports = router;