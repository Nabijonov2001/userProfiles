const { loginGet, loginPost } = require('../controllers/loginController')

const router = require('express').Router()

router.get('/login', loginGet)
router.post('/login', loginPost)

module.exports = {  
    path:'/api',
    router
}