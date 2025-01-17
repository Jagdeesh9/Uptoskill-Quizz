const mongoose = require('mongoose');
const Schema = mongoose.Schema
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});


// UserSchema.plugin(passportLocalMongoose);
const USER = mongoose.model('User', UserSchema);

module.exports = USER

