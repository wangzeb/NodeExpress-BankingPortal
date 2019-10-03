const express = require('express');
const router = express.Router();

const { accounts, writeJSON} = require('../data');
const {mongoose,productSchem,ProductModel} = require('../db/product');

router.get('/transfer',(req,res) => res.render('transfer'));
router.post('/transfer',(req,res)=>{
    console.log("req.body.from: "+req.body.from);
    console.log("req.body.to: "+req.body.to);
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance=parseInt(accounts[req.body.to].balance)+parseInt(req.body.amount,10);
    writeJSON();
    res.render('transfer',{message:"Transfer Completed"});
});

router.get('/payment',(req,res)=>res.render('payment',{account:accounts.credit}));
router.post('/payment',(req,res)=>{
    accounts.credit.balance -=req.body.amount;
    accounts.credit.available +=parseInt(req.body.amount,10);
    writeJSON();
    res.render('payment',{message: 'Payment Successful',account:accounts.credit});
});

router.get('/createTermLifeProduct',(req,res)=>{
    const product= new ProductModel({ id: 'LP002',name:'term 20 life' });
    product.save();
    res.render('productSave');

})

module.exports=router;