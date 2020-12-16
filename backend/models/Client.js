const mongoose = require('mongoose')
const { isEmail } = require('validator')


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

ClientSchema.pre('save', function(next) {
    console.log("user about to be saved ", this);
    next()
})


const Client = mongoose.model('client', ClientSchema)


module.exports = Client