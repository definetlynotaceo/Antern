var express = require("express");
var path = require("path");

// var routes = require("./routes");
var app = express();

app.set("port", process.env.port || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));
app.listen(app.get("port"), function(){
  console.log("server started on Port " + app.get("port"));
});
