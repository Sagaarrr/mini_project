const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bedSchema = new Schema({
    bedNo:Number,
    fName:String,
    mName:String,
    bMark:String,
    bDate:String,
    bTime:String,
    bldGrp:String,
    wgt:String
});

const bedModel = mongoose.model('beds',bedSchema);

module.exports = bedModel;
// db.beds.insert({bedNo:1,fName:"Pradeep",mName:"Rupa",bMark:"blue eyes",bDate:"05-01-2022",bTime:"15:45",bldGrp:"B+ve",wgt:"3.5"});