const Product = require('../models/ProductModel');

// Product.sync();

class ProductController {

    //[GET] /products
    getAllProductTest(req, res) {
        Product.findAll().then(products => {
            res.json(products);
        })
    }

    //[GET] /products/:id
    getDetailProduct(req, res) {
        res.send("true");
    }
}

module.exports = new ProductController;