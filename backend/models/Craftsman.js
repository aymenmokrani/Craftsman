const mongoose = require('mongoose')
const { isEmail } = require('validator')

const CrafstmanSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please enter a valid email"]
    },
    user_name: {
        type: String,
        required: [true, "please enter a craftsman name"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"],
        minlength: [6, "mininmum password length is 6 characters"]
    },
    clients: {
        type: [Number],
        default: []
    },
    reviews: [{
        owner: {
            type: String,
            required: [true, "owner id is missing"]
        },
        rating: {
            type: Number,
            required: [true, "rating is missing"]
        },
        content: {
            type: String
        }
    }],
    jobs: [Number]
})

const Craftsman = mongoose.model('craftsman', CrafstmanSchema)


module.exports = Craftsman