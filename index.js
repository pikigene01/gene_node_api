const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("./routes/router");
const postsRouter = require("./routes/posts");
const productsRouter = require("./routes/products");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { buildAdminJS } = require("./includes/config/setup");
const { serverResponds } = require("./includes/server_responds");

dotenv.config();

const start = async () => {
  try {
    mongoose.connect(
      process.env.MongoDBConnect,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log(process.env.MongoDBConnect);
      }
    );
    // mongoose.set('strictQuery', false);
    app.use(express.json());
    app.use(fileUpload());
    app.use("/api/user", router);
    app.use("/api", postsRouter);
    app.use("/api", productsRouter);
    await buildAdminJS(app);
    app.listen("3000", () => console.log("server running"));
  } catch (error) {
    return serverResponds(402, {
      message: `failed to start the server ${error}`,
      success: false,
    });
  }
};

start();
