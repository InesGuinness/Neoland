const Writer = require("../models/Writer.models");

const createWriter = async (req, res, next) => {
	try {
		// await Writer.syncIndexes();
		// Initialize newWriter object with request body data
		const customBody = {
			name: req.body.name,
			dead: req.body.dead,
			gender: req.body.gender,
			image: req.body.image,
			books: req.body.books, //  books and likes are arrays of ObjectIds
			likes: req.body.likes,
		};
		console.log(customBody);
		const newWriter = new Writer(customBody);
		console.log(customBody);
		// Set the image path if file is uploaded
		if (req.file) {
			newWriter.image = req.file.path;
		} else {
			newWriter.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
		}

		const savedWriter = await newWriter.save();

		return res.status(201).json(savedWriter);
	} catch (error) {
		return res.status(404).json({
			error: "error catch create author",
			message: error.message,
		});
	}
};

module.exports = { createWriter };
