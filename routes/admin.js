const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product',(req,res,next)=>{
  //  res.send('<html><body><form action="/admin/add-product" method="POST">Product Name: <input type="text" name="product"/>Description: <input type="text" name="description"/><button type="submit"> SUBMIT</button></form></body></html>');
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    let newuser = req.body;
    console.log(newuser);
    res.redirect('/');
   // res.send(`<html><body><h1>New user is ${newuser.fullname} is added</h1></body></html>`);
  
});



module.exports = router;