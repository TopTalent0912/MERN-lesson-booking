const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/test", userController.test);

router.post("/signup", userController.signup);

router.get("/verify/:id/:token", userController.verifyToken);

module.exports = router;
