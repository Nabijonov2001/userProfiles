const router = require('express').Router()
const { getMe } = require('../controllers/meController')
const auth = require('../middlewares/authMiddleware')

router.get('/users/me', auth, getMe)

module.exports = {  
    path:'/api',
    router
}
