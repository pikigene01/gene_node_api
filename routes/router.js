const router = require("express").Router();
const User = require("../models/User");
const Transaction = require("../models/Transaction");
const {
  user_login_validation,
  user_register_validation,
} = require("../includes/validation");
const { serverResponds } = require("../includes/server_responds");

router.post("/", (req, res) => {
  res.send("Server is running..");
});

router.post("/register", async (req, res) => {
  // const { error } = user_register_validation(req.body);
  // if (error) {
  //   return serverResponds(
  //     404,
  //     { status: 404, message: error?.details[0].message },
  //     res
  //   );
  // }
  const saveUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
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
  res.send("Register");
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
