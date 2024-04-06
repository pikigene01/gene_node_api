const mongoose = require("mongoose");

const Transaction = mongoose.Schema({
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

module.exports = mongoose.model("Transaction", Transaction);
