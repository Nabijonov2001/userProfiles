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

    static async putMe(req, res){
      try {
        const token = verifyToken(req.cookies.token)
        await Users.findByIdAndUpdate({ _id:token.id}, {
          name:req.body.name,
          email:req.body.email
        })
        res.redirect('/api/users')
        res.send('done')

      } catch (error) {
        console.log(error)
      }

    }
}