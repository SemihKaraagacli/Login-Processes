const express = require("express");
const { loginValidation } = require("../controllers/loginConroller");

const router = express.Router();

router.get("/", loginValidation);

module.exports = router;
