const UserModal = require('./users.entity');
const bcrypt = require('bcrypt-nodejs');

const addUser = (userData, done) => {
    let user = new UserModal({
        ...userData
    });
    user.password = user.generateHash(user.password);
 
    user.save((err, savedUser) => {
        if(err) {
            console.error('Error Saving User Information', err);
            done(err);
        } else {
            done(null, savedUser);
        }
    });
};

const loginUser = (loginData, done) => {
    UserModal.findOne({
        userName: loginData.userName
    }, (err, userData) => {
        if(!userData || !bcrypt.compareSync(loginData.password, userData.password)) {
            done({
                "customError": "UserName or Password do not match",
                "fullError": err
            });
        } else {
            done(null, userData);
        }
    });
};

module.exports = {
    addUser,
    loginUser
}