const router = require('express').Router();
const categoriesController = require('./categories.controller');

router.get('/primary', (req, res) => {
    categoriesController.getPrimaryCategories((err, data) => {
        if(err) {
            res.status(200).send({
                error: "No primary categories found"
            });
        } else {
            res.status(200).send(data);
        }
    });
});

module.exports = router;