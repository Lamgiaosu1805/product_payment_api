const Product = require('../models/ProductModel');

// Product.sync();
class ProductController {
    
    //[GET] /products
    getAllProductTest(req, res) {
        Product.sync({ force: false }).then(() => {
            return Product.create({
                barcode: "12354345",
                name: "Kem trộn",
                price: 10000,
            })
        })
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