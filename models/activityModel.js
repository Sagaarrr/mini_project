const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    
    activity:String,
    time:String
    
});

const activityModel = mongoose.model('activity',activitySchema);

module.exports = activityModel;