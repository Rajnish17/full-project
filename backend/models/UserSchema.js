const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String},
    email: { type: String},
    contact:{type:Number},

  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('User', UserSchema);