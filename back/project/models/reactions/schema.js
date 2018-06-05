var mongoose = require('mongoose')

module.exports = new mongoose.Schema({
    reaction: {
        type: String,
        enum: ['like', 'love', 'hate'],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    }
})