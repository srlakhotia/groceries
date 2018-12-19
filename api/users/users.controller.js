const userService = require('./users.service');

const addUser = (userData, done) => {
    userService.addUser(userData, done)
}

module.exports = {
    addUser
}