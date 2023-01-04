const mongoose = require('mongoose');

const giveawaySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add a title value']
    },
    image: {
        type: String,
        required: [true, 'Please add an image']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    price: {
        type: String,
        required: [true, 'Please add a price']
    },
    region: {
        type: String,
        required: [true, 'Please add a region']
    },
    field: {
        type: String,
        required: [true, 'Please add a field']
    },
    date: {
        type: String,
        required: [true, 'Please add a date']
    },
    multiply: {
        type: Number,
        required: [true, 'Please add a multiply number']
    },
    repeat: {
        type: Number,
        required: [true, 'Please add a repeat number']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Giveaway', giveawaySchema);