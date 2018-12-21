const categoriesService = require('./categories.service');

const getPrimaryCategories = done => {
    categoriesService.getPrimaryCategories(done);
};

const getSubCategories = (categoryIds, done) => {
    categoriesService.getSubCategories(categoryIds, done);
};

module.exports = {
    getPrimaryCategories,
    getSubCategories
};