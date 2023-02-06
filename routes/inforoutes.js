const express = require("express");
const router = express.Router();
const API = require("../controllers/infoapi");

router.get("/", API.fetchAllPost);

module.exports = router;
