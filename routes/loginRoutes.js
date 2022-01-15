const express = require('express');
const router = express.Router();
const middlewares = require("../middleware")

const userC = require('../controllers/loginController');
let arr = ["name", "password"];
router
.post("/", middlewares.validate(arr), userC.getUserByName)
// .post('/' ,userC.insertUser)


module.exports = router;