const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = require("../models/user.model");
const Token = require("../models/token.model");
const sendEmail = require("../utils/email");
const { secret, expiresIn } = require("../config/keys").jwt;

const test = async (req, res) => {
  res.status(200).json("user api working well..");
};

const signup = async (req, res) => {
  try {
    const { email, fname, lname, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Please enter an email address." });
    }
    if (!fname || !lname) {
      return res.status(400).json({ error: "Please enter your full name" });
    }
    if (!password) {
      return res.status(400).json({ error: "You must enter a password" });
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

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Please enter an email address" });
    }
    if (!password) {
      return res.status(400).json({ error: "Please enter a password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "No user found for this email address" });
    }
    if (!user.verified) {
      return res
        .status(400)
        .json({ error: "You must verify your email before login" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, msg: "Password incorrect" });
    }

    //jwt token
    const payload = {
      id: user.id,
    };
    const jwtToken = jwt.sign(payload, secret, { expiresIn });

    if (!jwtToken) {
      throw new Error();
    }
    return res.status(200).json({
      success: true,
      token: `Bearer ${jwtToken}`,
      user: {
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again",
    });
  }
};

const forgotPass = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Please enter an Email address" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ error: "No user found for this Email address" });
    }
    if (!existingUser.verified) {
      return res.status(400).json({ error: "This Email is not verified" });
    }
    const resetToken = crypto.randomBytes(32).toString("hex");

    existingUser.resetPasswordToken = resetToken;
    existingUser.resetPasswordExpires = Date.now() + 3600000;

    existingUser.save();

    const message = `${process.env.BASE_URL}/api/user/resetPass/${resetToken}`;
    sendEmail(existingUser.email, "Reset Password", message);

    return res.status(200).json({
      success: true,
      message: "Please check your Email for the link to reset your password",
    });
  } catch (err) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again",
    });
  }
};

const resetPassByToken = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: "Please enter a password" });
    }
    const existingUser = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!existingUser) {
      return res.status(404).json({
        error:
          "Your token has expired. Please attempt to reset your password again.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    existingUser.password = hash;
    existingUser.resetPasswordToken = undefined;
    existingUser.resetPasswordExpires = undefined;

    await existingUser.save();

    return res.status(200).json({
      success: true,
      message:
        "Password changed successfully. Please login with your new password",
    });
  } catch (err) {
    return res.status(400).json({
      error: "Your request could not be processed. Please try again",
    });
  }
};

const resetPass = async (req, res) => {
  try {
    const { password, newPassword } = req.body;
    console.log(req.user);
    const email = req.user.email;
    if (!email) {
      return res.status(400).json("Unauthenticated user");
    }
    if (!password) {
      return res.status(400).json({ error: "Please enter a password" });
    }
    if (!newPassword) {
      return res.status(400).json({ error: "Please enter a new password" });
    }

    const existingUser = req.user;

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "Please enter correct old password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    existingUser.password = hash;
    const u = await existingUser.save();
    console.log(u);

    return res.status(200).json({
      success: true,
      message:
        "Password changed successfully. Please login with your new password",
    });
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Your request could not be processed. Please try again" });
  }
};
module.exports = {
  test,
  signup,
  verifyToken,
  signin,
  forgotPass,
  resetPassByToken,
  resetPass,
};
