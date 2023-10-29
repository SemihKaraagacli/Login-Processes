const express = require("express");
const { loginValidation } = require("../controllers/loginConroller");

const router = express.Router();

router.post("/", loginValidation);

module.exports = router;
