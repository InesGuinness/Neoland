const Book = require("../models/Book.models");

const CreateBook = async (req, res, next) => {
	let catchImg = req.file?.path; /// el optional chaining es para que no rompa en caso de no haber path

	try {
		await Book.syncIndex();

		const customBody = {
			name: req.body?.name,
			published: req.body?.published,
			image: req.body?.image,
			Writer: req.body?.books, //  books and likes are arrays of ObjectIds
			likes: req.body?.likes,
		};
		const newBook = new Book(customBody);
		const savedBook = await newBook.save();
	} catch (error) {
		return res.status(404).json({
			error: "error catch create book",
			message: error.message,
		});
	}
};

module.exports = { CreateBook };
