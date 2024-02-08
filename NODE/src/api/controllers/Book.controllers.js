const Book = require("../models/Book.models");
const Writer = require("../models/Writer.models");

//! ---------------------------------------------------------------------
//? ----------------------------   CREATE   --------------
//! ---------------------------------------------------------------------

const CreateBook = async (req, res, next) => {
	let catchImg = req.file?.path; /// el optional chaining es para que no rompa en caso de no haber path

	try {
		await Book.syncIndexes();

		const customBody = {
			name: req.body.name,
			published: req.body.published,
			image: req.body.image,
			writers: req.body.books, //  books and likes are arrays of ObjectIds
			likes: req.body.likes,
		};
		const newBook = new Book(customBody);
		if (req.file) {
			newBook.image = req.file.path;
		} else {
			newBook.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
		}
		const savedBook = await newBook.save();
		return res.status(201).json(savedBook);
	} catch (error) {
		return (
			res.status(404).json({
				error: "error catch create book",
				message: error.message,
			}) && next(error)
		);
	}
};

//! ---------------------------------------------------------------------
//? ----------------------------   TOGGLE  --------------
//! ---------------------------------------------------------------------

const toggleWriter = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { writers } = req.body;
		const bookById = await Book.findById(id);

		if (bookById) {
			const arrayIdWriters = writers.split(",");

			Promise.all(
				arrayIdWriters.map(async (writer, index) => {
					if (bookById.writers.includes(writer)) {
						try {
							await Book.findByIdAndUpdate(id, {
								$pull: { writers: writer },
							});

							try {
								await Writer.findByIdAndUpdate(writer, {
									$pull: { books: id },
								});
							} catch (error) {
								res.status(404).json({
									error: "error update writer",
									message: error.message,
								}) && next(error);
							}
						} catch (error) {
							res.status(404).json({
								error: "error update book",
								message: error.message,
							}) && next(error);
						}
					} else {
						try {
							await Book.findByIdAndUpdate(id, {
								$push: { writers: writer },
							});
							try {
								await Writer.findByIdAndUpdate(writer, {
									$push: { books: id },
								});
							} catch (error) {
								res.status(404).json({
									error: "error update writer",
									message: error.message,
								}) && next(error);
							}
						} catch (error) {
							res.status(404).json({
								error: "error update book",
								message: error.message,
							}) && next(error);
						}
					}
				})
			)
				.catch((error) => res.status(404).json(error.message))
				.then(async () => {
					return res.status(200).json({
						dataUpdate: await Book.findById(id).populate("writers"),
					});
				});
		} else {
			return res.status(404).json("este libro no existe");
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

//! ---------------------------------------------------------------------
//? -------------------------------get by id --------------------------
//! ---------------------------------------------------------------

const getById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const bookById = await Book.findById(id);
		if (bookById) {
			return res.status(200).json(bookById);
		} else {
			return res.status(404).json("book not found");
		}
	} catch (error) {
		return res.status(404).json(error.message);
	}
};

//! ---------------------------------------------------------------------
//? -------------------------------get all ------------------------------
//! ------------------------------------------------------------

const getAll = async (req, res, next) => {
	try {
		const allBook = await Book.find().populate("Writer");
		/** el find nos devuelve un array */
		if (allBook.length > 0) {
			return res.status(200).json(allBook);
		} else {
			return res.status(404).json("book not found");
		}
	} catch (error) {
		return res.status(404).json({
			error: "error al buscar - lanzado en el catch",
			message: error.message,
		});
	}
};

//! ---------------------------------------------------------------------
//? -------------------------------get by name --------------------------
//! ---------------------------------------------------------------

const getByName = async (req, res, next) => {
	try {
		const { name } = req.params;

		/// nos devuelve un array de elementos
		const bookByName = await Book.find({ name });
		if (bookByName.length > 0) {
			return res.status(200).json(bookByName);
		} else {
			return res.status(404).json("book not found");
		}
	} catch (error) {
		return res.status(404).json({
			error: "error al buscar por nombre capturado en el catch",
			message: error.message,
		});
	}
};

//! ---------------------------------------------------------------------
//? -------------------------------UPDATE -------------------------------
//! ------------------------------------------------------

const update = async (req, res, next) => {
	await Book.syncIndexes();
	let catchImg = req.file?.path;
	try {
		const { id } = req.params;
		const bookById = await Book.findById(id);
		if (bookById) {
			const oldImg = bookById.image;

			const customBody = {
				_id: bookById._id,
				image: req.file?.path ? catchImg : oldImg,
				name: req.body?.name ? req.body?.name : bookById.name,
			};

			if (req.body?.gender) {
				const resultEnum = enumOk(req.body?.gender);
				customBody.gender = resultEnum.check
					? req.body?.gender
					: bookById.gender;
			}

			try {
				await Book.findByIdAndUpdate(id, customBody);
				if (req.file?.path) {
					deleteImgCloudinary(oldImg);
				}

				const bookByIdUpdate = await Book.findById(id);

				const elementUpdate = Object.keys(req.body);

				let test = {};

				elementUpdate.forEach((item) => {
					if (req.body[item] === bookByIdUpdate[item]) {
						test[item] = true;
					} else {
						test[item] = false;
					}
				});

				if (catchImg) {
					bookByIdUpdate.image === catchImg
						? (test = { ...test, file: true })
						: (test = { ...test, file: false });
				}

				let acc = 0;
				for (clave in test) {
					test[clave] == false && acc++;
				}

				if (acc > 0) {
					return res.status(404).json({
						dataTest: test,
						update: false,
					});
				} else {
					return res.status(200).json({
						dataTest: test,
						update: true,
					});
				}
			} catch (error) {}
		} else {
			return res.status(404).json("este libro no existe");
		}
	} catch (error) {
		return res.status(404).json(error);
	}
};

//! ---------------------------------------------------------------------
//? ------------------------------- EXPORTS ------------------------------
//! ------------------------------------------------------------
module.exports = {
	CreateBook,
	getById,
	getAll,
	getByName,
	update,
	toggleWriter,
};
