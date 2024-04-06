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
const transaction = mongoose.Schema({
  name: {
    type: String,
    length: 255,
    default: null,
  },
  user_id: {
    type: String,
    length: 255,
  },
  item_id: {
    type: String,
    length: 255,
    default: null,
  },
  description: {
    type: String,
    length: 255,
    default: null,
  },
  amount: {
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
module.exports = mongoose.model("Transaction", transaction);
