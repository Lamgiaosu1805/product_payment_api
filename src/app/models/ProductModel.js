const Sequelize = require('sequelize');
const myModule = require('../../config/db/index');

const sequelize = myModule.sequelize;

const Model = Sequelize.Model;

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
        allowNull: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true,
        
    }
}, {
    timestamps: true,
});

module.exports = Product;



