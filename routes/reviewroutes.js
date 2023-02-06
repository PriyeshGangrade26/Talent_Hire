const express = require("express");
const router = express.Router();
const API = require("../controllers/reviewapi");

router.get("/", API.fetchAllPost);

module.exports = router;
