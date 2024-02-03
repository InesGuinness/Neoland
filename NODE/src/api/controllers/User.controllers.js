const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const randomCode = require("../../utils/randomCode");
const User = require("../models/User.models");

const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { configDotenv } = require("dotenv");
configDotenv;

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
			//! -------------LO REGISTRAMOS PORQUE NO HAY COINCIDENCIAS CON UN USER INTERNO
			const newUser = new User({ ...req.body, confirmationCode });

			// EL USER HA METIDO IMAGEN ???
			if (req.file) {
				newUser.image = req.file.path;
			} else {
				newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
			}

			///! SI HAY UNA NUEVA ASINCRONIA DE CREAR O ACTUALIZAR HAY QUE METER OTRO TRY CATCH
			try {
				const userSave = await newUser.save();
				return res.status(200).json({ data: userSave });
			} catch (error) {
				return res.status(404).json(error.message);
			}
		} else {
			///! -------> cuando ya existe un usuario con ese email y ese name
			if (req.file) deleteImgCloudinary(catchImg);
			// como ha habido un error la imagen previamente subida se borra de cloudinary
			return res.status(409).json("this user already exist");
		}
	} catch (error) {
		// SIEMPRE QUE HAY UN ERROR GENERAL TENEMOS QUE BORRAR LA IMAGEN QUE HA SUBIDO EL MIDDLEWARE
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
			if (!req.file) {
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

module.exports = { registerLargo, register };
