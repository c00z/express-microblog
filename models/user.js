var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
  oauthID: Number,
  username: String,
  password: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

UserSchema.plugin(passportLocalMongoose, {
  populateFields: 'posts'
});

var User = mongoose.model('User', UserSchema);

module.exports = User;