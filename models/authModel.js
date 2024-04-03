const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema ({
    name: {
        type: String, 
        required: [true, 'Please provide name'],
        minLength: 5,
        maxLength: 30,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true  
    },
    password:{
        type: String,
        required: [true, 'Pleaser provide password'],
        minLength: 6,
    },
})

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        { userId: this._id, name: this.name },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
}

UserSchema.methods.comparePassword = async function (candiadatePassword) {
   const isMatch = await bcrypt.compare(candiadatePassword, this.password)
   return isMatch 
}

module.exports = mongoose.model('User', UserSchema)