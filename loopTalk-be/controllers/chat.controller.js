import { TryCatch } from "../middlewares/error.js";
import { emitEvent } from "../utils/features.js";
import { Chat } from '../models/chat.model.js'
import { ALERT, REFETCH_CHATS } from '../constants/events.js'

const newGroupChat = TryCatch(async (req, res, next) => {
    const { name, members } = req.body;

    const allMembers = [...members, req.user];

    await Chat.create({
        name,
        groupChat: true,
        creator: req.user,
        members: allMembers,
    });

    emitEvent(req, ALERT, allMembers, `Welcome to ${name} group`);
    emitEvent(req, REFETCH_CHATS, members);

    return res.status(201).json({
        success: true,
        message: "Group Created",
    });
});

const getMyChats = TryCatch(async (req, res, next) => {
    const chats = await Chat.find({ members: req.user }).populate('members', "name avatar")

    return res.status(200).json({
        success: true,
        data: chats,
    });
})

export { newGroupChat, getMyChats }
