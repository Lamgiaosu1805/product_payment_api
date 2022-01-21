class ProductController {

    //[GET] /products
    getAllProductTest(req, res) {
        res.json(
            {
                "id" : "1233",
                "barCode" : "1343123526AA",
                "name" : "Kem trộn"
            }
        );
    }

    //[GET] /products/:id
    getDetailProduct(req, res) {
        res.send("true");
    }
}

module.exports = new ProductController;