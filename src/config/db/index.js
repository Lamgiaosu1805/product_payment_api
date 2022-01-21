const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb+srv://kylanx11:nghiemlamhust1@cluster0.qjbm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failure !!");
    }
}

module.exports = { connect };