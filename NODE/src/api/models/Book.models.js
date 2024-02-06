const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
	{
		name: { type: String, required: true, unique: false },
		published: {
			type: Number,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
		Writer: [{ type: mongoose.Schema.Types.ObjectId, ref: "Writer" }],
		likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = BookSchema;
