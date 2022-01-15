const userM = require("../models/userModel");

const getUserByName = async (req, res) => {
  //   console.log("controller", req.body);
  const { name, password } = req.body;
  try {
    let ans = await userM.findOne({ name: name, password: password });
    // console.log(ans.name);
    if (!ans) {
      return res.json({
        success: false,
        msg: "no user found",
      });
    }
    res.status(200).send({
      success: true,
      msg: "user found",
    });
  } catch (error) {
    res.send({ err: error });
  }
};

const insertUser = async (req, res) => {
  try {
      console.log("hello");
    let userData = req.body;
    let instance = new userM(userData);
    let ans = await instance.save();
    res.send({ response: ans });
  } catch (err) {
    res.send({ error: err });
  }
};

module.exports = {
  getUserByName,
  insertUser,
};
