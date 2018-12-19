const router = require('express').Router();
const userController = require('./users.controller');

router.post('/register', (req, res) => {
    try {
        let newUser = req.body;
        userController.addUser(newUser, (err, data) => {
        if(err) {
                res.status(200).send('Something went wrong behind the scenes.', err);
                return;
            }
            data.password = "";
            res.status(200).send(data);
            return;
        });
    } catch(e) {
        res.status(200).send(e);
        return;
    }
});

router.post('/login', (req, res) => {
    try {
        let logindata = req.body;
        userController.loginUser(logindata, (err, data) => {
        if(err) {
                res.status(200).send(err.customError);
                return;
            }
            data.password = "";
            res.status(200).send(data);
            return;
        });
    } catch (e) {
        res.status(200).send(e);
        return;
    }
});

module.exports = router;