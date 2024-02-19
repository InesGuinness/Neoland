const Writer = require("../models/Writer.models");
const Chat = require("../models/Chat.model");
const Message = require("../models/Message.models");
const Book = require("../models/Book.models");
const User = require("../models/User.models");

//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------

const createMessage = async (req, res, next) => {
	try {
		const { owner, type, content } = req.body;
		const { idRecipient } = req.params;

		const findUser = await User.findById(idRecipient);
		const findBook = await Book.findById(idRecipient);
		const findWriter = await Writer.findById(idRecipient);

		if (findUser) {
			const newMessage = new Message(req.body);
			const savedMessage = await newMessage.save();
			if (type == "private") {
				try {
					const chatExistOne = await Chat.findOne({
						userOne: req.user._id,
						userTwo: findUser._id,
					});
					const chatExistTwo = await Chat.findOne({
						userOne: findUser._id,
						userTwo: req.user._id,
					});

					if (chatExistOne != null || chatExistTwo != null) {
						if (chatExistOne) {
							try {
								await chatExistOne.updateOne({
									$push: { messages: newMessage._id },
								});

								return res.status(200).json({
									chat: await Chat.findById(chatExistOne._id),
									comment: newMessage,
								});
							} catch (error) {
								try {
									await Message.findByIdAndDelete(savedMessage._id);
									return res
										.status(404)
										.json(
											"error en actualizar el chat existente, elimino el comentario"
										);
								} catch (error) {
									return res
										.status(404)
										.json(
											"no he borrado el coment  ni tampoco he actualizdo el chat existente"
										);
								}
							}
						} else if (chatExistTwo) {
							try {
								await chatExistTwo.updateOne({
									$push: { messages: newMessage._id },
								});

								return res.status(200).json({
									chat: await Chat.findById(chatExistTwo._id),
									comment: newMessage,
								});
							} catch (error) {
								try {
									await Message.findByIdAndDelete(savedMessage._id);
									return res
										.status(404)
										.json(
											"error en actualizar el chat existente, elimino el comentario"
										);
								} catch (error) {
									return res
										.status(404)
										.json(
											"no he borrado el coment  ni tampoco he actualizdo el chat existente"
										);
								}
							}
						}
					} else {
						const newChat = new Chat({
							userOne: req.user._id,
							userTwo: findUser._id,
							messages: [savedMessage._id],
						});

						try {
							await newChat.save();
							return res.status(200).json({
								chat: newChat,
								comment: newMessage,
							});
						} catch (error) {
							try {
								await Message.findByIdAndDelete(savedMessage._id);
								return res
									.status(404)
									.json(
										"no se ha guardado el nuevo chat y se ha borrado el comentario"
									);
							} catch (error) {
								return res
									.status(404)
									.json(
										"no se ha creado el chat pero no se ha borrado el comentario"
									);
							}
						}
					}
				} catch (error) {
					return res.status(404).json(error.message);
				}
			} else if (type == "public") {
				// SIMPLEMENTE CREAMOS EL COMENTARIO Y LO METEMOS EN LOS ARRAY DE LOS MODELOS AL QUE CORRESPONDA -- USER
			} else {
				await Message.findByIdAndDelete(savedMessage._id);
				return res.status(404).json(error.message);
			}
		} else if (findBook) {
		} else if (findWriter) {
		} else {
			return res.status(404).json("el id no esta correcto");
		}
	} catch (error) {
		return res.status(404).json(error.message);
	}
};

module.exports = { createMessage };
