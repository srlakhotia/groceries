const categoriesService = require('./categories.service');

const getPrimaryCategories = done => {
    categoriesService.getPrimaryCategories(done);
};

module.exports = {
    getPrimaryCategories
};