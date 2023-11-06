const express = require("express");
const {
  authenticationToken,
  fetchAllUser,
} = require("../controllers/authController");

const router = express.Router();

router.get("/", authenticationToken, fetchAllUser);

module.exports = router;
