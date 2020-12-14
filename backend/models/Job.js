const mongoose = require('mongoose')


const JobSchema = mongoose.Schema({
    job_name: {
        type: String,
        required: true
    },
    categories: {
        type: [Number],
        required: true
    }
})

const Job = mongoose.model('job', JobSchema)


module.exports = Job