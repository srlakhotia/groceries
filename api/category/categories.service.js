const CategoryModel = require('./categories.entity');

const getPrimaryCategories = done => {
    CategoryModel.find({ primaryCategory: true }, (err, categories) => {
        if(err) {
            console.error("Unable to find primary categories");
            done(err);
        } else {
            done(null, categories);
        }
    });
};

const getSubCategories = (categoryIds, done) => {
    CategoryModel.find({ _id: categoryIds}, (err, categories) => {
        if(err) {
            console.error("Unable to find primary categories");
            done(err);
        } else {
            done(null, categories);
        }
    });
};

module.exports = {
    getPrimaryCategories,
    getSubCategories
}