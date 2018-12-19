const userService = require('./users.service');

const addUser = (userData, done) => {
    userService.addUser(userData, done)
};

const loginUser = (loginData, done) => {
    userService.loginUser(loginData, done);
}

module.exports = {
    addUser,
    loginUser
}