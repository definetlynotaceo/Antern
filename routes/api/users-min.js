var express=require("express"),router=express.Router();router.get("/",(function(e,r){r.json("This is a json status code für the users api")})),module.exports=router;