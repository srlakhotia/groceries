const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//Hashing the password
schema.methods.generateHash = (password) => {
    console.log('hhhhhh')
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

schema.methods.vaildPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', schema);