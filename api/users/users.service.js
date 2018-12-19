const UserModal = require('./users.entity');

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

module.exports = {
    addUser
}