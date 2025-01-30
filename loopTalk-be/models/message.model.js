import { Schema, models, model, Types } from "mongoose";

const messageSchema = new Schema({
    content: {
        type: String,
    },
    attachments: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    sender: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
    chat: {
        type: Types.ObjectId,
        ref: "Chat",
        required: true,
    },
}, { timestamps: true });

export const Message = models.message || model("Message", messageSchema);