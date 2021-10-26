const {model, Schema} = require('mongoose')
const Joi = require('joi')

const userSchema = new Schema({
    name:{
        type:String,
        min:5,
        max:50,
        required:true
    },
    username:{
        type:String,
        min:5,
        max:50,
        unique: true,
        required:true
    },
    email:{
        type:String,
        min:5,
        max:50,
        unique: true,
        required:true
    },
    password:{
        type:String,
        min:5,
        max:20,
        required:true
    },
    signup:{
        type:String,
        required: true
    }
})

const validate = function(user){
   const schema = Joi.object().keys({
       name:Joi.string().min(5).max(50).required(),
       username:Joi.string().min(5).max(50).required(),
       email: Joi.string().min(5).max(50).email().required(),
       password: Joi.string().min(5).max(20).required(),
       signup: Joi.string().required()
   })

   return schema.validate(user)
}

const Users = model('users', userSchema)

module.exports = {
    Users, validate
}