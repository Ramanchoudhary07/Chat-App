import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  const { id: recieverId } = req.params;
  const { message } = req.body;
  const senderId = req.userId;

  try {
    let userConversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!userConversation) {
      userConversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      userConversation.messages.push(newMessage._id);
    }

    await newMessage.save();
    await userConversation.save();
    console.log("Message sent:", newMessage);
    res.status(200).json(newMessage);
  } catch (error) {
    console.log("error in sending message", error);
    res.status(400).json({ error: "Error in sending messsage" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: ChatToUserId } = req.params;
    const senderId = req.userId;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, ChatToUserId] },
    }).populate("messages");
    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getting message", error);
    res.status(500).json({ error: "Internal server Error" });
  }
};
