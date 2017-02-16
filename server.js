var express = require('express');

var app = express();

app.get("/", function homepage (req, res) {
  res.sendFile(__dirname + "/views/index.html");

});
