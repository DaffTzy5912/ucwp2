const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  number: String,
  bio: String,
  profilePicture: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
