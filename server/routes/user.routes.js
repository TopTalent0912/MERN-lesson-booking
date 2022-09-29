const express = require("express");
const router = express.Router();

//import middleware
const auth = require("../middlewares/auth");

const userController = require("../controllers/user.controller");

router.get("/test", userController.test);

router.post("/signup", userController.signup);

router.get("/verify/:id/:token", userController.verifyToken);

router.post("/signin", userController.signin);

router.post("/forgot", userController.forgotPass);

router.post("/reset/:token", userController.resetPassByToken);

router.post("/reset", auth, userController.resetPass);

module.exports = router;
