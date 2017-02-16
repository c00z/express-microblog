var express = require('express');

var app = express();

var controllers = require('./controllers');

app.get("/", function homepage (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/", controllers.api.index)

app.get("/api/posts", controllers.api.posts)










app.listen(process.env.PORT || 3000, function(){
  console.log("SERVER HAS BECOME AWARE!")
});
