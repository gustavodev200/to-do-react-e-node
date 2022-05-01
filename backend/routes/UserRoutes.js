const router = require('express').Router()

const UserController = require('../controllers/UserController')

const verifyToken = require('../helpers/verify-token')
const getUserByToken = require('../helpers/get-user-by-token')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/checkuser', UserController.checkUser)
router.get('/:id',verifyToken, UserController.getUserById)

module.exports = router;