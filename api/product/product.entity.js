const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productMeta: {
        brand: {
            type: String,
            default: ""
        },
        vegCategory: {
            type: String,
            enum: ["Veg", "Non-veg"],
            default: "Veg"
        }
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "",
    },
    qty: {
        type: Number,
        default: 0,
        min: 0
    },
    img: {
        type: String,
        default: ""
    }
}, { collection: 'product' });

module.exports = mongoose.model('product', schema);