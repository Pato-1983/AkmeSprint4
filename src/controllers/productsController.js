//<!--requires-->
const fs = require('fs');
const path = require('path');

//<!--lectura json-->
//const productsJSON = fs.readFileSync(path.resolve(__dirname, '../database/products.json'), 'utf8');
//const products = JSON.parse(productsJSON);

const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB ('products')
const products = jsonDB('products') // funcionalides de json database
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {

    products: (req,res) => {
        const products = productModel.readFile();
        res.render('products/products', {products,toThousand})
    },

    detail: (req,res) => { 
        const id = +req.params.id;
        const product = productModel.find(id);    
        res.render('products/productDetail', {product,toThousand})
    },

    create: (req,res) => res.render('products/productCreate'),

    store: (req, res) => {
		let images = []
		let files = req.files

		// cambiamos ciclo for por forEach
		files.forEach(image => {
			images.push(image.filename)
		});

		// capturo todos los campos del body
		let newProduct = {
			...req.body,
			image: req.files.length >= 1  ? images : ["default-image.jpeg"]
		}

		productModel.create(newProduct)
		res.redirect('/')

	},

    edit: (req,res) => { 
        const id = +req.params.id;
        const product = productModel.find(id);    
        res.render('products/productEdit',{product});
    },

    delete: (req,res) => {
        let idToDelete = req.params.id;
        let product = productModel.find(idToDelete);
        let pathToImage = path.join(__dirname, '../../public/images/'+ product.image[0]);
        fs.unlinkSync( pathToImage );
        productModel.delete(idToDelete);
        res.redirect('/productos');
    },

    // //update: (req,res) => {
    //     let idToUpdate = req.params.id;
    //     let dataUpdate = req.body;
    //     const product = productModel.find(idToUpdate);  
    //     let imagenes= []
	// 	for(let i = 0 ; i<req.files.length;i++){
    //         imagenes.push(req.files[i].filename)
    //     }
    //     dataUpdate.image =imagenes.length > 0 ? imagenes : product.image;
    //     let productUpdate = {
    //         id: idToUpdate,
    //         ...dataUpdate,
    //     }
    //     productModel.update(productUpdate);
    //     res.redirect('/productos');
    // },

	update: (req, res) => {
		let id = Number(req.params.id);
		let productToEdit = productModel.find(id);
		let images = [];
		let files = req.files
		
		// cambiamos ciclo for por forEach
		files.forEach(image => {
			
			images.push(image.filename)
		});

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			// Si se suben imagenes se pone como valor el array imagenes y sino se queda el que ya estaba antes
			image: files.length >= 1  ? images : productToEdit.image
		}

		productModel.update(productToEdit)
		res.redirect("/");
	},
	
    
    filter: (req,res) => {
        let filtro = req.query;
        const products = productModel.readFile();
        res.render('products/products', {products,toThousand,filtro})
    },

}


module.exports = controller;