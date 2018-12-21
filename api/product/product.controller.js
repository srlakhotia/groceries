const prodService = require('./product.service.js');
const mongoose = require('mongoose');

const getProduct = (prodId, done) => {
    prodService.getProduct(prodId, done);
};

const getProductsList = (queryObj, done) => {
    let query = {};

    if(queryObj.type === "category") {
        query = {
            categories: queryObj.data
        };
    } else if(queryObj.type === "name") {
        let name = new RegExp(queryObj.data, "i");
        query = {
            name: name
        };
        console.log(query)
    }
    
    prodService.getProductsList(query, done);
};

module.exports = {
    getProduct,
    getProductsList
}