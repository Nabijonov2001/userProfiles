const jwt =  require('jsonwebtoken')
// const {SECRET_KEY} = require('../config')

function generateToken(data){
    const token = jwt.sign(data, 'fazliddin')
    return token
}

function verifyToken(token){
    const decoded = jwt.verify(token, 'fazliddin')
    return decoded
}

module.exports = {
    generateToken, verifyToken
}