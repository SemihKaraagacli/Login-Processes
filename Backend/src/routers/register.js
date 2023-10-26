const express = require("express");
const { addUser } = require("../controllers/registerContoller");

const router = express.Router();

router.post("/", addUser);

module.exports = router;
