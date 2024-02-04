const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const randomCode = require("../../utils/randomCode");
const sendEmail = require("../../utils/sendEmail");

const User = require("../models/User.models");

const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { configDotenv } = require("dotenv");
const {
	setTestEmailSend,
	getTestEmailSend,
} = require("../../state/state.data");
configDotenv;

const jwt = require("jsonwebtoken");
const { generateToken } = require("../../utils/token");

const registerLargo = async (req, res, next) => {
	let catchImg = req.file?.path; /// el optional chaining es para que no rompa en caso de no haber path

	try {
		await User.syncIndexes();
		let confirmationCode = randomCode();
		const { email, name } = req.body; // lo que enviamos por la parte del body de la request

		const userExist = await User.findOne(
			{ email: req.body.email },
			{ name: req.body.name }
		);

		if (!userExist) {
			const newUser = new User({ ...req.body, confirmationCode });

			if (req.file) {
				newUser.image = req.file.path;
			} else {
				newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
			}

			try {
				const userSave = await newUser.save();

				if (userSave) {
					const emailEnv = process.env.EMAIL;
					const password = process.env.PASSWORD;

					const transporter = nodemailer.createTransport({
						service: "gmail",
						auth: {
							user: emailEnv,
							pass: password,
						},
					});

					const mailOptions = {
						from: emailEnv,
						to: email,
						subject: "Confirmation code",
						text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
					};

					transporter.sendMail(mailOptions, function (error, info) {
						if (error) {
							console.log(error);
							return res.status(404).json({
								user: userSave,
								confirmationCode: "error, resend code",
							});
						}
						console.log("Email sent: " + info.response);
						return res.status(200).json({
							user: userSave,
							confirmationCode,
						});
					});
				}
			} catch (error) {
				return res.status(404).json(error.message);
			}
		} else {
			if (req.file) deleteImgCloudinary(catchImg);
			return res.status(409).json("this user already exist");
		}
	} catch (error) {
		if (req.file) deleteImgCloudinary(catchImg);
		return next(error);
	}
};

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CORTO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------

const register = async (req, res, next) => {
	let catchImg = req.file?.path;
	try {
		await User.syncIndexes();
		let confirmationCode = randomCode();
		const { email, name } = req.body;

		const userExist = await User.findOne(
			{ email: req.body.email },
			{ name: req.body.name }
		);

		if (!userExist) {
			const newUser = new User({ ...req.body, confirmationCode });
			if (req.file) {
				newUser.image = req.file.path;
			} else {
				newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
			}

			try {
				const userSave = await newUser.save();

				if (userSave) {
					sendEmail(email, name, confirmationCode);
					setTimeout(() => {
						if (getTestEmailSend()) {
							setTestEmailSend(false);
							return res.status(200).json({
								user: userSave,
								confirmationCode,
							});
						} else {
							setTestEmailSend(false);
							return res.status(404).json({
								user: userSave,
								confirmationCode: "error, resend code",
							});
						}
					}, 1100);
				}
			} catch (error) {
				return res.status(404).json(error.message);
			}
		} else {
			if (req.file) deleteImgCloudinary(catchImg);
			return res.status(409).json("this user already exist");
		}
	} catch (error) {
		if (req.file) deleteImgCloudinary(catchImg);
		return next(error);
	}
};

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CON REDIRECT----------------------------
//! -----------------------------------------------------------------------------

const registerWithRedirect = async (req, res, next) => {
	let catchImg = req.file?.path;
	try {
		await User.syncIndexes();
		let confirmationCode = randomCode();
		const userExist = await User.findOne(
			{ email: req.body.email },
			{ name: req.body.name }
		);
		if (!userExist) {
			const newUser = new User({ ...req.body, confirmationCode });
			if (req.file) {
				newUser.image = req.file.path;
			} else {
				newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
			}

			try {
				const userSave = await newUser.save();
				const PORT = process.env.PORT;
				if (userSave) {
					return res.redirect(
						307,
						`http://localhost:${PORT}/api/v1/users/register/sendMail/${userSave._id}`
					);
				}
			} catch (error) {
				return res.status(404).json(error.message);
			}
		} else {
			if (req.file) deleteImgCloudinary(catchImg);
			return res.status(409).json("this user already exist");
		}
	} catch (error) {
		if (req.file) {
			deleteImgCloudinary(catchImg);
		}
		return next(error);
	}
};
//! -----------------------------------------------------------------------------
//? ----------------------------LÓGICA PARA MANDAR CÓDIGO -----------------------
//! -----------------------------------------------------------------------------

const sendCode = async (req, res, next) => {
	try {
		const { id } = req.params;

		const userDB = await User.findById(id);

		const emailEnv = process.env.EMAIL;
		const password = process.env.PASSWORD;

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: emailEnv,
				pass: password,
			},
		});

		const mailOptions = {
			from: emailEnv,
			to: userDB.email,
			subject: "Confirmation code",
			text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
				return res.status(404).json({
					user: userDB,
					confirmationCode: "error, resend code",
				});
			}
			console.log("Email sent: " + info.response);
			return res.status(200).json({
				user: userDB,
				confirmationCode: userDB.confirmationCode,
			});
		});
	} catch (error) {
		return next(error);
	}
};

//! -----------------------------------------------------------------------------
//? ---------------------------- INICIAR SESIÓN ---------------------------------
//! -----------------------------------------------------------------------------

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const userDB = await User.findOne({ email });

		if (userDB) {
			if (bcrypt.compareSync(password, userDB.password)) {
				const token = generateToken(userDB._id, email);
				return res.status(200).json({
					user: userDB,
					token,
				});
			} else {
				return res.status(404).json("password dont match");
			}
		} else {
			return res.status(404).json("User no register");
		}
	} catch (error) {
		return next(error);
	}
};

//? ---------------------------- EXPORTS ---------------------------------

module.exports = {
	registerLargo,
	register,
	sendCode,
	registerWithRedirect,
	login,
};
