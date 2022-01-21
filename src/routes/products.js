const express = require('express');
const router = express.Router();
const productController = require('../app/controller/ProductController');


router.get('/:slug',productController.getDetailProduct);
router.get('/', productController.getAllProductTest);


module.exports = router;