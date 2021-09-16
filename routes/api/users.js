var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.json("This is a json status code für the users api");
});

module.exports = router;
