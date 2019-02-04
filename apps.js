const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const path = require('path');

const app = express();



app.use(bodyParser.urlencoded({extended:false}));
//create middleware for parsing request body

app.use('/admin',adminRoutes);

app.use(shopRoutes);

//handle 404 NOT FOUND PAGE
app.use((req,res) => {
    //res.status(404).send('<h1>PAGE NOT FOUND</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'));
});



app.listen(3000);