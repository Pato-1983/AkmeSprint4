// const express = require('express');

// const router = express.Router();

// const mainController = require('../controllers/mainController.js');
// const othersController = require('../controllers/othersController.js');

// router.get('/', mainController.index)

// router.get('/productDetail/:id', mainController.productDetail)

// router.get('/login', othersController.login)

// router.get('/register', othersController.register)

// router.get('/carritoCompras', othersController.carritoCompras)

// router.get('/productEdit/:id', mainController.productEdit)

// module.exports = router;

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/contact', mainController.contact);

router.get('/help', mainController.help);

router.get('/about', mainController.about);

module.exports = router;

