const router = require('express').Router()
const { getMe, putMe } = require('../controllers/meController')
const auth = require('../middlewares/authMiddleware')

router.get('/users/me', auth, getMe)
router.put('/users/me',auth, putMe)

module.exports = {  
    path:'/api',
    router
}
