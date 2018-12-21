const ProductModal = require('./product.entity');

const getProduct = (prodId, done) => {
    ProductModal.findOne({ "_id":  prodId }, (err, prodData) => {
        if(err) {
            console.error("Unable to find the product");
            done(err);
        } else {
            done(null, prodData);
        }
    });
};

module.exports = {
    getProduct
}