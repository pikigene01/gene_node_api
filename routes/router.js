const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Transaction = require("../models/Transaction");
const jwt = require("jsonwebtoken");
const { auth } = require("../includes/middlewares/verifyToken");
const {
  user_login_validation,
  user_register_validation,
} = require("../includes/validation");
const { serverResponds } = require("../includes/server_responds");

router.post("/login", async (req, res) => {
  const { error } = user_login_validation(req.body);
  if (error) {
    return serverResponds(
      404,
      { status: 404, message: error?.details[0].message },
      res
    );
  }
  const getUser = await User.findOne({ email: req.body.email });
  if (!getUser) {
    return serverResponds(
      404,
      { status: 404, message: "User Do Not Exists" },
      res
    );
  }

  const passwordVerify = await bcrypt.compare(
    req.body.password,
    getUser.password
  );
  if (!passwordVerify) {
    return serverResponds(
      404,
      { status: 404, message: "Password Do Not Match Please try again" },
      res
    );
  }
  const token = await jwt.sign({ _id: getUser?._id }, process.env.TOKEN);
  return serverResponds(
    200,
    { status: 200, message: "Logged In Successfully!!", token },
    res
  );
});
router.post("/register", async (req, res) => {
  const { error } = user_register_validation(req.body);
  if (error) {
    return serverResponds(
      404,
      { status: 404, message: error?.details[0].message },
      res
    );
  }
  const email = req.body.email,
    password = req.body.password,
    confirm_password = req.body.confirm_password;
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return serverResponds(404, { message: "User Already Exists" }, res);
  }
  if (password !== confirm_password) {
    return serverResponds(
      404,
      {
        message: "Password amd Confirm Password Do not match!!!",
      },
      res
    );
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const saveUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await saveUser.save();
    return res.send({
      status: 200,
      msg: "Data saved successfully",
      user: savedUser,
    });
  } catch (error) {
    return res.send(error).status(400);
  }
});

router.post("/upload", (req, res) => {
  // Check if files were uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // Access the uploaded file
  const file = req.files.myFile;

  // Move the file to the desired location
  file.mv("/path/to/destination/filename.ext", (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send("File uploaded successfully");
  });
});

module.exports = router;
