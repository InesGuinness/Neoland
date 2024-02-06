const Writer = require("../models/Writer.models");

const createWriter = async (req, res, next) => {
	try {
		await Writer.syncIndex();

		const customBody = {
			name: req.body?.name,
			name: req.body?.name,
			dead: req.body?.dead, // boolean value
			gender: req.body?.gender,
			image: req.body?.image,
			books: req.body?.books, //  books and likes are arrays of ObjectIds
			likes: req.body?.likes,
		};
		const newWriter = new Writer(customBody);
		const savedWriter = await newWriter.save();
	} catch (error) {
		return res.status(404).json({
			error: "error catch create movie",
			message: error.message,
		});
	}
};

module.exports = { createWriter };
