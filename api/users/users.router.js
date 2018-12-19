const router = require('express').Router();
const userController = require('./users.controller');

router.post('/add', (req, res) => {
    try {
        let newUser = req.body;
        userController.addUser(newUser, (err, data) => {
        if(err) {
                res.status(400).send('Something went wrong behind the scenes.');
                return;
            }
            res.status(200).send(data);
            return;
        });
    } catch(e) {
        console.log('two')
        res.status(200).send('Something went wrong behind the scenes.', e);
        return;
    }
});

module.exports = router;