require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./utils/db");

//init app
const app = express();

//import routes
const userRoutes = require("./routes/user.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPopicy: false,
    frameguard: true,
  })
);
app.use(cors());

connectDB();
//passport
require("./config/passport")(app);

console.log("process.env.NODE_ENV ", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(compression());
} else {
  app.use(morgan("dev"));
}

app.use("/api/user", userRoutes);
const port = process.env.PORT || 8090;

app.listen(port, () => {
  console.log(
    `${chalk.green("✓")} ${chalk.blue(`Server running on port ${port}`)}`
  );
});
