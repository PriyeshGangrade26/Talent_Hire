const Info = require("../models/infos");

module.exports = class API {
  // fetch all posts
  static async fetchAllPost(req, res) {
    try {
      const infos = await Info.find();
      res.status(200).json(infos);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
