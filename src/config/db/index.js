// const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql6467268', 'sql6467268', 'lamlovequynh1', {
    host: 'sql6.freesqldatabase.com',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    }
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failure");
    }
}

module.exports = { 
   connect: connect,
   sequelize: sequelize,
};
