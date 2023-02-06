const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  UserName: String,
  Review: String,

  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Review", reviewSchema);
