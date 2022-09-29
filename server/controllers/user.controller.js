const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const passport = require("passport");

const User = require("../models/user.model");
const Token = require("../models/token.model");
const sendEmail = require("../utils/email");

const test = async (req, res) => {
  res.status(200).json("user api working well..");
};

const signup = async (req, res) => {
  try {
    const { email, fname, lname, password, confirmPassword } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Please enter an email address." });
    }
    if (!fname || !lname) {
      return res.status(400).json({ error: "Please enter your full name" });
    }
    if (!password) {
      return res.status(400).json({ error: "You must enter a password" });
    }
    if (!confirmPassword) {
      return res.status(400).json({ error: "You must enter confirm password" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Confirm password and password is incorrect" });
    }
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ error: "This email address already exists" });
    }
    //Creating New User
    const user = new User({
      email,
      fname,
      lname,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    const registeredUser = await user.save();

    //save verify token
    const token = await new Token({
      userId: registeredUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    //verify message
    const message = `${process.env.BASE_URL}/api/user/verify/${user.id}/${token.token}`;
    console.log(message);
    await sendEmail(registeredUser.email, "Verify Email", message);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
};

const verifyToken = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).json({ error: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).json({ error: "Invalid token" });

    await User.updateOne({ _id: user._id, verified: true });
    await Token.findByIdAndRemove(token._id);

    res
      .status(200)
      .json({ success: true, msg: "Email verified successfully!" });
  } catch (err) {
    res
      .status(400)
      .json({ error: "An error occured during email verification" });
  }
};

module.exports = {
  test,
  signup,
  verifyToken,
};
