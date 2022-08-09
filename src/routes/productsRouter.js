const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multerMiddleware = require('../middleware/multer');
const uploadFile = multerMiddleware('images','product');

router.get('/detail/:id', productsController.detail)
router.get('/edit/:id', productsController.edit)
//router.put('/edit/:id', productsController.update)
router.put('/edit/:id', uploadFile.array('image'), productsController.update) //
router.get('/create', productsController.create)
router.post('/create',uploadFile.array('image'), productsController.store);
router.get('/products', productsController.products)
router.delete('/:id', productsController.delete);
//router.put('/:id',uploadFile.array('image'), productsController.update);
module.exports = router;
////////////////////