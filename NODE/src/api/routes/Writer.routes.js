const { createWriter } = require("../controllers/Writer.controllers");

const WriterRoutes = require("express").Router();

WriterRoutes.post("/", createWriter);

module.exports = WriterRoutes;
