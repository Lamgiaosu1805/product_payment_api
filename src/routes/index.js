const productsRouter = require('./products');
const siteRouter = require('./site');

function route(app) {
    
    app.use('/products', productsRouter);
    app.use('/', siteRouter);
}

module.exports = route;