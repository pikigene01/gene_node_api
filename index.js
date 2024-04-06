const express = require("express");
const fileUpload = require('express-fileupload');
const router = require("./routes/router");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MongoDBConnect,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected");
  }
);
app.use(express.json());
app.use(fileUpload());
app.use("/api/user", router);

app.listen("3000", () => console.log("server running"));
