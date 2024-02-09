const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
	{
		owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		type: {
			type: String,
			enum: ["private", "public"],
			require: true,
		},
		content: {
			type: String,
			require: true,
		},
		recipientBook: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
		recipientWriter: [{ type: mongoose.Schema.Types.ObjectId, ref: "Writer" }],
		recipientUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
		likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
