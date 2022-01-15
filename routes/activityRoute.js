const express = require('express');
const router = express.Router();

const productC = require('../controllers/activityController');

router
.get('/',productC.getActivity)
.post('/' , productC.insertActivity)


module.exports = router;