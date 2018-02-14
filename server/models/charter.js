const mongoose = require('mongoose')

const Charter = mongoose.model('Charter', {
    model: {
        type: String,
        required:true,
        minlength:1

    }, 
    length:{
        type: Number
    }
})

module.exports = {
    Charter: Charter
}
