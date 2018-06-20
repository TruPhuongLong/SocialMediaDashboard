import mongoose from 'mongoose';

const Post = mongoose.model('Post', {
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    imageurls: [{
        type: String,
        trim: true,
    }],
    createat: {
        type: Number
    },
    editat: {
        type: Number
    },
    userid: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = {Post}