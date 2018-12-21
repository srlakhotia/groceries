const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    primaryCategory: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        default: ""
    },
    subCategories: [{
        id: {
            // type: mongoose.Schema.Types.ObjectId
            type: String
        }
    }]
}, { collection: "category" });

module.exports = mongoose.model('category', schema);