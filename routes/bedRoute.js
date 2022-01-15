const express = require('express');
const router = express.Router();

const productC = require('../controllers/bedController');

router
.get('/',productC.getBed)
.post('/' , productC.insertBed)
.delete('/:Id' , productC.deleteBed)
.put('/:Id',productC.updateBed)

module.exports = router;