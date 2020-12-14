const mongoose = require('mongoose')


const ClientSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    client_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    craftsmen: [Number]
})

const Client = mongoose.model('client', ClientSchema)


module.exports = Client