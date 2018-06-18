import mongoose from 'mongoose';

const Album = mongoose.model('Album', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    }
})

module.exports = {Album}