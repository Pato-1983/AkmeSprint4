const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');

const multer = require('multer');


router.get('/detail/:id', productsController.detail)


router.get('/edit/:id', productsController.edit)

//router.put('/edit/:id', productsController.update)

//router.put('/edit/:id', upload.single('image'), productsController.update)


router.get('/create', productsController.create)

router.get('/products', productsController.products)

module.exports = router;