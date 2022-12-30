const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); 

const errorController = require('./controllers/error')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use(errorController.error404);

app.listen(1000);