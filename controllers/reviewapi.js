const Review = require("../models/reviews");

module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    try {
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
