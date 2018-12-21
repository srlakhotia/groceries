const router = require('express').Router();
const productController = require('./product.controller');

router.get('/:productId', (req, res) => {
    const prodId = req.params.productId
    productController.getProduct(prodId, (err, data) => {
        if(err) {
            res.status(200).send({
                err: `cannot find product with id ${prodId}`
            })
        } else {
            res.status(200).send(data);
        }
    });
});

module.exports = router;