const bedM = require('../models/bedModel');

const getBed = async(req,res)=>{
    try{
        let ans = await bedM.find();
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}
const insertBed = async(req,res)=>{
    try{
        let userData = req.body;
        let instance = new bedM(userData);
        let ans = await instance.save();
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}
const updateBed = async(req,res)=>{
    try{
        let urlData= req.params.Id;
        let userData = req.body;
        let ans = await bedM.findByIdAndUpdate(urlData,userData);
        res.send({response:ans})
    }
    catch(err){
        res.send({error:err})
    }
}
const deleteBed = async(req,res)=>{
    try{
        let urlData= req.params.Id;
        console.log(urlData);
        let ans = await bedM.findByIdAndRemove(urlData);
        res.send({response:ans})

    }
    catch(err){
        res.send({error:err})
    }
}

module.exports = {
    getBed,
    insertBed,
    updateBed,
    deleteBed
}