const path = require('path');

const rootdir = require('../util/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
};

exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
};