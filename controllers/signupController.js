const { generateToken } = require("../models/auth")
const { validate, Users } = require("../models/usersModel")
const { hashPassword } = require("../modules/hash")


module.exports = class Signup{

    static signupGet = (req, res)=>{
        res.status(200).render('signup')
    }

    static signupPost = async (req, res)=>{
        try {
            const {error} = validate(req.body)
            if(error){
                throw new Error(error.details[0].message)
            }
            const check = await Users.findOne({email: req.body.email})
            if(check){
                throw new Error("This email had already taken!")
            }

            const hashedPassword = await hashPassword(req.body.password)
             const user = new Users({
                ...req.body,
                password:hashedPassword
            })
            const token = generateToken({
                id: user.id, 
                email: user.email,
                username:user.username,
                fullname:user.fullname
               })
            res.cookie('token', token)
            res.status(201).redirect('/api/login')
            

            await user.save()
            
        } catch (error) {
            res.render('signup', {
                error: error.message
            })
        }
        
    }


}