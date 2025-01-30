import { Schema, models, model, Types } from "mongoose";

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    groupChat: {
        type: Boolean,
        default: false,
    },
    creator: {
        type: Types.ObjectId,
        ref: "User",
    },
    members: [
        {
            type: Types.ObjectId,
            ref: "User",
        },
    ],
}, { timestamps: true });

export const Chat = models.chat || model("Chat", chatSchema);