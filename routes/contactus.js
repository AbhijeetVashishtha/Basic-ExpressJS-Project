const path = require('path');
const express = require('express');

const contactController = require('../controllers/contact');

// const rootdir = require('../util/path');

const router = express.Router();
router.get('/contactus', contactController.getContact);

router.post('/contactus', contactController.postContact);

module.exports = router;