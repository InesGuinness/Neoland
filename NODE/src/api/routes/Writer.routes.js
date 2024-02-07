const { upload } = require("../../middleware/files.middleware");
const { createWriter } = require("../controllers/Writer.controllers");

const WriterRoutes = require("express").Router();

WriterRoutes.post("/", upload.single("image"), createWriter);

module.exports = WriterRoutes;
