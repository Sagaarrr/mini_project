//https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    password:String
});

//connect schema with collection name
const userModel = mongoose.model('user',userSchema);

module.exports = userModel;