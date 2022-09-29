const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const role = require("../constants");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: role.ROLE_STU,
    enum: [role.ROLE_ADMIN, role.ROLE_STU, role.ROLE_TCH],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
    default: undefined,
  },
  resetPasswordExpires: {
    type: String,
    default: undefined,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
