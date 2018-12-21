const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/products', require('./product'));
// router.use('/category', require('./category'));

module.exports = router;