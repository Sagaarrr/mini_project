const activityM = require('../models/activityModel');

const getActivity = async(req,res)=>{
    try{
        let ans = await activityM.find();
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}
const insertActivity = async(req,res)=>{
    try{
        let userData = req.body;
        let instance = new activityM(userData);
        let ans = await instance.save();
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}

module.exports = {
    getActivity,insertActivity
}