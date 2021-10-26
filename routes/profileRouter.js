const router = require('express').Router()
const { getProfile } = require('../controllers/profileController')
const auth = require('../middlewares/authMiddleware')

router.get('/users/:username', auth, getProfile)

module.exports = {  
    path:'/api',
    router
}
