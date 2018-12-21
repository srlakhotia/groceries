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

const getProductsList = (query, done) => {
    ProductModal.find(query, (err, products) => {
        if(err) {
            console.error("No Products", err);
            done(err);
        } else {
            done(null, products);
        }
    });
}

module.exports = {
    getProduct,
    getProductsList
}