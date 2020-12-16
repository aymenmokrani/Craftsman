const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const ClientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please enter a valid email address"]
    },
    user_name: {
        type: String,
        required: [true, "please enter a name"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"],
        minlength: [6, "mininmum password length is 6 characters"]
    },
    craftsmen: {
        type: [Number],
        default: []
    }
})

ClientSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


ClientSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error("incorrect password")
    }
    throw Error("incorrect email")
}


const Client = mongoose.model('client', ClientSchema)


module.exports = Client