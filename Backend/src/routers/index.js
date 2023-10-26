const express = require("express");
const { fetchAllUser } = require("../controllers/indexController");

const router = express.Router();

router.get("/", fetchAllUser);

module.exports = router;
