const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    id : {
        type: Number
    },
    text : {
        type: String
    },
    day : {
        type: String
    },
    reminder : {
        type: Boolean
    }
})

module.exports =  mongoose.model('Task' , taskSchema)