const path = require('path');
const express = require('express');

const productController = require('../controllers/products')
// const rootdir = require('../util/path');

const router = express.Router();

router.get('/', productController.getProduct);

module.exports = router;