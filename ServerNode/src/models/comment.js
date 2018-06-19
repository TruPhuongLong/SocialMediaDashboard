import mongoose from 'mongoose';

const Comment = mongoose.model('Comment', {
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    userid: {
        type: String,
        required: true,
        trim: true
    },
    postid: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = {Comment}