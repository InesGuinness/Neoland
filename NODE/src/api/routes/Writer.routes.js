const { upload } = require("../../middleware/files.middleware");
const {
	createWriter,
	toggleBook,
} = require("../controllers/Writer.controllers");

const WriterRoutes = require("express").Router();

WriterRoutes.post("/", upload.single("image"), createWriter);
WriterRoutes.patch("/add/:id", toggleBook);

module.exports = WriterRoutes;
