const express = require("express");
const { fetchAllUser } = require("../controllers/authController");
const { authenticationToken } = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticationToken, fetchAllUser);

module.exports = router;
