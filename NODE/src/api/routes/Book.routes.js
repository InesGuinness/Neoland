const { CreateBook } = require("../controllers/Book.controllers");

const BookRoutes = require("express").Router();

BookRoutes.post("/", CreateBook);

module.exports = BookRoutes;
