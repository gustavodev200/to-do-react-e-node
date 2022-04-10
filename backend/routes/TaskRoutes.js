const router = require('express').Router()

const TaskController = require('../controllers/TaskController')

const verifyToken = require('../helpers/verify-token')

router.post('/create', verifyToken, TaskController.createTasks)

module.exports = router;