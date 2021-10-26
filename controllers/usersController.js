 const {Users} = require('../models/usersModel')
 const { verifyToken } = require("../models/auth") 
    module.exports = class Profile{
        static async getUsers(req, res){
          const users = await Users.find()
          const currentUser = verifyToken(req.cookies.token)
          const index = users.findIndex(user => user.username === currentUser.username)
          delete users[index]
          res.render('users', {
              users
          })
        }
    } 