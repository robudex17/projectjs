const express = require('express');
const router = express.Router();
const path = require('path');



// router.get('/add-product', (req,res,next) => {
//     //res.send('<html><body><h1>Welcome to nodejs</h1></body></html>');
//     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
// });

router.get('/', (req,res,next) => {
    //res.send('<html><body><h1>Welcome to nodejs</h1></body></html>');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;