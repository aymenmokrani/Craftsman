const mongoose = require('mongoose')


const CrafstmanSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    craftsman_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    clients: {
        type: [Number],
        default: []
    },
    reviews: [{
        owner: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }],
    jobs: [Number]
})

const Craftsman = mongoose.model('craftsman', CrafstmanSchema)


module.exports = Craftsman