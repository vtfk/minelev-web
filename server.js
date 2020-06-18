const path = require("path");
const express = require("express");
const compression = require("compression");

const app  = express();

app.use(compression());

const DIST_DIR = path.join(__dirname, "build");
const DEFAULT_PORT  = 8001;

app.set("port", process.env.PORT || DEFAULT_PORT);

app.use(express.static(DIST_DIR));

app.get("*", function(req, res) {
  res.sendFile(path.join(DIST_DIR + "/", "index.html"));
});

app.listen(app.get("port"), function(){
  console.log("App listening on port " + app.get("port"))
});
