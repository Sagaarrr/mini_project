function validate(options){
    return function (req, res, next){
    let payload = req.body;
   
    let hasKey = options.every(el => !!payload[el]);
    
    if(!hasKey){
        return res.status(200).json({ 
            success: false,
            msg:"Invalid Input Data"
        })
    }
    next();
    }
   
}

module.exports = validate;