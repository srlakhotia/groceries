const prodService = require('./product.service.js');

const getProduct = (prodId, done) => {
    prodService.getProduct(prodId, done);
};

module.exports = {
    getProduct
}