const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: {
    type: String,
    length: 255,
  },
  password: {
    type: String,
    length: 255,
  },
  is_verified: {
    type: Boolean,
    length: 255,
    default: null,
  },
  email: {
    type: String,
    length: 255,
  },
  bio: {
    type: String,
    length: 255,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", user);
