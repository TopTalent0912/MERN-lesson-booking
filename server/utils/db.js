require("dotenv").config();
const chalk = require("chalk");
const mongoose = require("mongoose");

const keys = require("../config/keys");
const { database } = keys;

const connectDB = async () => {
  try {
    mongoose
      .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`${chalk.green("✓")} ${chalk.blue(`MongoDB connected!`)}`);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
    return null;
  }
};
module.exports = connectDB;
