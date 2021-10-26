const { verifyToken } = require("../models/auth")

module.exports = function authenticateUser(req, res, next){
    const token = req.cookies.token
    if(!token){
        res.redirect('/api/login')
    }
    const decoded = verifyToken(token)
    if(!decoded){
        res.redirect('/api/login')
    }
    next()

}