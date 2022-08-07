//<!--requires-->
const fs = require('fs');
const path = require('path');

//<!--lectura json-->
const productsJSON = fs.readFileSync(path.resolve(__dirname, '../dataBase/products.json'), 'utf8');
const products = JSON.parse(productsJSON);


controller = {

    products: (req,res) => {
        const listadoDeProductos = products;     
        res.render('products/products', {listadoDeProductos});
    },

    detail: (req,res) => { 
        const id = +req.params.id;
        const product = products.find( product => product.id == id);    
        res.render('products/productDetail', {product})
    },

    create: (req,res) => res.render('products/productCreate'),

    edit: (req,res) => { 
        const id = +req.params.id;
        const product = products.find( product => product.id == id);  
        res.render('products/productEdit',{product});
    },

}


module.exports = controller;