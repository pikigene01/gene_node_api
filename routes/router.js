const router = require("express").Router();
const User = require("../includes/mongodb_schema");
const {
  user_login_validation,
  user_register_validation,
} = require("../includes/validation");
const { serverResponds } = require("../includes/server_responds");

router.get("/", (req, res) => {
  res.send("Server is running..");
});

router.post("/register", async (req, res) => {
  const { error } = user_register_validation(req);
  if (error)
    return serverResponds(
      404,
      { status: 404, message: error?.details[0].message },
      res
    );
  const saveUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await saveUser.save();
    res.send({ status: 200, msg: "Data saved successfully", user: saveUser });
  } catch (error) {
    res.send({ msg: error }).status(400);
  }
  res.send("Register");
});

module.exports = router;
