const express = require("express");
const { userData, getUserData } = require("../controllers/user-controller");

const router = express.Router();

router.get("/userData", getUserData);
router.post("/", userData);

module.exports = router;