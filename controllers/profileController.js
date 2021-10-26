const { Users } = require('../models/usersModel')

    module.exports = class Profile{
        static async getProfile(req, res){
          const user = await Users.findOne({username:req.params.username})
          res.render('profile', {
            user
          })
        }
    }