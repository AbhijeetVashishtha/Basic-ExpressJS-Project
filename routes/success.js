const path = require('path');
const express = require('express');

const router = express.Router();
const rootdir = require('../util/path');
router.get('/success', (req,res) => {
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
});

module.exports = router;
