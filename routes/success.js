const express = require('express');

const successController = require('../controllers/contact');

const router = express.Router();

router.get('/success', successController.formSuccess);

module.exports = router;
