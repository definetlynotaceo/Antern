var express = require("express");

var router = express.Router();

// TODO: add in error and info__block

router.use("/", require("./home"));

module.exports = router;
