const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    band_name: {
        required: true,
        type: String
    },
    event_name: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date
    },
    venue: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    image_url: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
