const Sequelize = require('sequelize');
const myModule = require('../../config/db/index');

const sequelize = myModule.sequelize;

const Product = sequelize.define('product', {
    //attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    barcode: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true,
        
    }
}, {
    timestamps: true,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});

module.exports = Product;



