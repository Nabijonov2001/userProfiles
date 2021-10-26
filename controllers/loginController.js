const { comparePassword } = require("../modules/hash")
const { generateToken } = require("../models/auth")
const { Users } = require('../models/usersModel')
const Joi = require('joi')

function validateUser(user) {
    const schema = Joi.object().keys({
        username: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(20).required(),
        signin: Joi.string().required()
    })

    return schema.validate(user)
}

module.exports = class Login {

    static loginGet = (req, res) => {
        res.status(200).render('login')
    }

    static loginPost = async (req, res) => {
        try {
            const {error} = validateUser(req.body)
            if (error) {
                throw new Error(error.details[0].message)
            }
            const user = await Users.findOne({ username: req.body.username })
            if (!user) {
                throw new Error("You have no account, please create now!")
            }
            const checkPass = await comparePassword(req.body.password, user.password)
            if(!checkPass){
                throw new Error("Username or password incorrect!")
            }
            const token = generateToken({
                 id: user.id, 
                 email: user.email,
                 username:user.username,
                 fullname:user.fullname
                })
            res.cookie('token', token)
            res.status(201).redirect('/api/users')
        } catch (error) {
            res.render('login', {
                error: error.message
            })
        }

    }
}
