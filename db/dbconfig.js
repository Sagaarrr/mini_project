const mongoose = require('mongoose');

async function conn(){
    return await mongoose.connect(process.env.MONGOURI);
}
async function login(){
    return await mongoose.connect(process.env.MONGOURI_login);
}
async function activity(){
    return await mongoose.connect(process.env.MONGOURI_activity);
}

module.exports = {
    conn,login,activity
}