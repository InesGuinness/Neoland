const { upload } = require("../../middleware/files.middleware");
const {
	registerLargo,
	register,
	registerWithRedirect,
	sendCode,
	login,
	autoLogin,
	resendCode,
	checkNewUser,
} = require("../controllers/User.controllers");
const express = require("express");
const UserRoutes = express.Router();

//! ---------------- endPoints sin auth ---------------------------------------

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), register);
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/autoLogin", autoLogin);

//! ---------------- endPoints con auth ---------------------------------------

UserRoutes.get("/register/sendMail/:id", sendCode); // :id ---> es el nombre del param
module.exports = UserRoutes;
