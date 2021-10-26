const router = require('express').Router()
const { getUsers } = require('../controllers/usersController')
const auth = require('../middlewares/authMiddleware')

router.get('/users', auth, getUsers)

module.exports = {  
    path:'/api',
    router
}
