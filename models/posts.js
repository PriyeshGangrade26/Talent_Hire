const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  companyNameTitle: String,
  jobProfile: String,
  jobDescription: String,
  location: String,
  skills: String,
  salary: String,
  CompanyEmail: String,
  CompanyLink: String,

  image: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Post", postSchema);
