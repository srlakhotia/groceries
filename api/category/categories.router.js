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

router.post('/subCategories', (req, res) => {
    const subCategoryArray = req.body.categories;

    categoriesController.getSubCategories(subCategoryArray, (err, data) => {
        if(err) {
            res.status(200).send({
                error: "No sub categories data found"
            });
        } else {
            res.status(200).send(data);
        }
    });
});

module.exports = router;