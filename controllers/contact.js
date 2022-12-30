const path = require('path');

const rootdir = require('../util/path');

exports.getContact = (req,res,next) => {
    res.sendFile(path.join(rootdir, 'views', 'contactus.html'));
};

exports.postContact = (req,res,next) => {
    console.log(req.body);
    res.redirect('/success');
};

exports.formSuccess = (req,res) => {
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
};