const { signupGet, signupPost } = require('../controllers/signupController')

const router = require('express').Router()

router.get('/signup', signupGet)
router.post('/signup', signupPost)

module.exports = {
    path:'/api',
    router
}