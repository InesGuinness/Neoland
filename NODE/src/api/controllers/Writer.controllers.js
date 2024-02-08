const Book = require("../models/Book.models");
const Writer = require("../models/Writer.models");

const createWriter = async (req, res, next) => {
	let catchImg = req.file?.path; /// el optional chaining es para que no rompa en caso de no haber path

	try {
		await Writer.syncIndexes();
		// Initialize newWriter object with request body data
		const customBody = {
			name: req.body.name,
			dead: req.body.dead,
			gender: req.body.gender,
			image: req.body.image,
			books: req.body.books, //  books and likes are arrays of ObjectIds
			likes: req.body.likes,
		};
		const newWriter = new Writer(customBody);
		if (req.file) {
			newWriter.image = req.file.path;
		} else {
			newWriter.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
		}

		const savedWriter = await newWriter.save();

		return res.status(201).json(savedWriter);
	} catch (error) {
		return (
			res.status(404).json({
				error: "error catch create author",
				message: error.message,
			}) && next(error)
		);
	}
};

//! ---------------------------------------------------------------------
//? ----------------------------   TOGGLE  --------------
//! ---------------------------------------------------------------------

const toggleBook = async (req, res, next) => {
	let catchImg = req.file?.path; /// el optional chaining es para que no rompa en caso de no haber path

	try {
		const { id } = req.params;
		const { books } = req.body;
		const writerById = await Writer.findById(id);

		if (writerById) {
			const arrayIdBooks = books.split(",");

			Promise.all(
				arrayIdBooks.map(async (book, index) => {
					if (writerById.books.includes(book)) {
						try {
							await Writer.findByIdAndUpdate(id, {
								$pull: { books: book },
							});

							try {
								await Book.findByIdAndUpdate(book, {
									$pull: { writers: id },
								});
							} catch (error) {
								res.status(404).json({
									error: "error update book",
									message: error.message,
								}) && next(error);
							}
						} catch (error) {
							res.status(404).json({
								error: "error update writer",
								message: error.message,
							}) && next(error);
						}
					} else {
						try {
							await Writer.findByIdAndUpdate(id, {
								$push: { books: book },
							});
							try {
								await Book.findByIdAndUpdate(book, {
									$push: { writers: id },
								});
							} catch (error) {
								res.status(404).json({
									error: "error update book",
									message: error.message,
								}) && next(error);
							}
						} catch (error) {
							res.status(404).json({
								error: "error update writer",
								message: error.message,
							}) && next(error);
						}
					}
				})
			)
				.catch((error) => res.status(404).json(error.message))
				.then(async () => {
					return res.status(200).json({
						dataUpdate: await Writer.findById(id).populate("books"),
					});
				});
		} else {
			return res.status(404).json("este escritor no existe");
		}
	} catch (error) {
		return (
			res.status(404).json({
				error: "error catch",
				message: error.message,
			}) && next(error)
		);
	}
};

module.exports = { createWriter, toggleBook };
