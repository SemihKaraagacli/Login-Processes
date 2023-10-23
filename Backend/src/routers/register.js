const express = require("express");
const { addUser, fetchAllUser } = require("../controllers/registerContoller");

const router = express.Router();

router.post("/", addUser);
router.get("/", fetchAllUser);

module.exports = router;
