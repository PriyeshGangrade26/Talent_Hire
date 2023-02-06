const mongoose = require("mongoose");
const infoSchema = mongoose.Schema({
  Name: String,
  LogIn: String,
  LogOut: String,
  HeroTitle: String,
  HeroSemiTitle: String,
  HeroDescription: String,
  HeroBtn: String,
  Services: String,
  FeaturedTitle: String,
  FeaturedSemiTitle: String,
  FeaturedDescription: String,
  FeaturedCompanyTitle: String,
  OurTeam: String,
  TeamDescription: String,
  TeamTitle: String,
  ContactUs: String,
  footerDescription: String,

  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Info", infoSchema);
