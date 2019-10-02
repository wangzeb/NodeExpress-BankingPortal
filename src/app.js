const fs = require('fs');
const path = require('path');

const express = require('express');

const mongoose = require('mongoose');


const { accounts, users } = require('./data');

const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

//mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true});
//const db = mongoose.connection;

app.get("/", (req, res) => {
    /*  
    db.on('error', console.error.bind(console, 'connection error:'));
    const product = db.product.find({});
    console.log("product data from mongo db:"+product.product_id);
    db.once('open', function () {
        console.log(db.product.find({}));

    });
   */
    res.render('index', { title: 'Account Summary', accounts })
}
);

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);


app.get('/profile', (req, res) => {
    res.render('profile', { user: users[0] });
});



app.listen(3000, () => console.log("PS project is running on port: 3000"));