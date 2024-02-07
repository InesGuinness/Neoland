const { upload } = require("../../middleware/files.middleware");
const {
	CreateBook,
	getById,
	getAll,
	getByName,
	update,
} = require("../controllers/Book.controllers");

const BookRoutes = require("express").Router();

BookRoutes.post("/", CreateBook);
BookRoutes.get("/:id", getById);
BookRoutes.get("/", getAll);
BookRoutes.get("/byName/:name", getByName);
BookRoutes.patch("/:id", upload.single("image"), update);
//BookRoutes.delete("/:id", deleteCharacter);

module.exports = BookRoutes;
