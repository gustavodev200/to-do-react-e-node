const router = require('express').Router()

const TaskController = require('../controllers/TaskController')

const verifyToken = require('../helpers/verify-token')

router.post('/create', verifyToken, TaskController.createTasks)
router.delete('/:id', verifyToken, TaskController.removeTasks)
router.patch('/:id', verifyToken, TaskController.editTasks)

module.exports = router;