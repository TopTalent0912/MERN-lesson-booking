const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: ROLE_STU,
    enum: [ROLE_ADMIN, ROLE_STU, ROLE_TCH],
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
