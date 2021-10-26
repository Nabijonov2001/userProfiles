const bcrypt = require('bcrypt')

module.exports = class Pass{
    static async hashPassword(password){
        const salt  = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        return hashed
    }

    static async comparePassword(password, hashedPassword){
            return await bcrypt.compare(password, hashedPassword)
    }
}