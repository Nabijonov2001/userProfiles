const {Users} = require('../models/usersModel')
const { verifyToken } = require("../models/auth") 
 
module.exports = class Me{
    static async getMe(req, res){
      const currentUser = verifyToken(req.cookies.token)
      const user = await Users.findOne({username:currentUser.username})
      res.render('me', {
        user
      })
    }
}