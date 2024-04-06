const router = require("express").Router();
const User = require("../includes/mongodb_schema");
const { user_login_validation } = require("../includes/validation");

router.get("/", (req, res) => {
  res.send("Server is running..");
});

router.post("/register", (req, res) => {
  // const saveUser = new User({
  //     name: req.body.name,
  //     description: req.body.description
  // });

  // try{
  //  saveUser.save();
  //  res.send({status: 200,msg: 'Data saved successfully', user: saveUser});
  // }catch(error){
  //     res.send({msg: error}).status(400);
  // }
  res.send("Register");
});

module.exports = router;
