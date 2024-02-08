const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WriterSchema = new Schema(
	{
		name: { type: String, required: false, unique: false },
		dead: {
			type: Boolean,
			enum: ["yes", "no"],
			required: false,
			unique: false,
		},
		gender: {
			type: String,
			enum: ["hombre", "mujer", "otros"],
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
		books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
		likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Writer = mongoose.model("Writer", WriterSchema);

module.exports = Writer;
