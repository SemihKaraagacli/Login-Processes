const express = require("express");
const { fetch1AllUser } = require("../controllers/indexController");

const router = express.Router();

router.get("/", fetch1AllUser);

module.exports = router;
