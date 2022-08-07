//<!--requires-->
const fs = require('fs');
const path = require('path');

//<!--lectura json-->
const productsJSON = fs.readFileSync(path.resolve(__dirname, '../dataBase/products.json'), 'utf8');
const products = JSON.parse(productsJSON);


controller = {

    index : (req,res) => {
        const destacados = products.filter(product => product.discount != 0);     
        res.render('main/index',{destacados});
    },

    contact: (req,res) => res.render('main/contact'),

    help: (req,res) => res.render('main/help'),

    about: (req,res) => res.render('main/about'),
    
}

module.exports = controller;