var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/microblog");

var Post = require("./post");
module.exports.Post = Post;
