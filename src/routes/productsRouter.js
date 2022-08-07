const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);

router.get('/detail/:id', productsController.detail)

router.get('/edit/:id', productsController.edit)

router.get('/create', productsController.create)

router.get('/products', productsController.products)

module.exports = router;