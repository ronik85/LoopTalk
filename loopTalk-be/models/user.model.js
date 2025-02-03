import mongoose, { Schema, model, Types } from "mongoose";
import { hash, compare } from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await hash(this.password, 10);
});

userSchema.methods.isPasswordValid = async function (inputPassword) {
    const hashedPassword = this.password
    const isPasswordValid = await compare(inputPassword, hashedPassword)
    return isPasswordValid
}

export const User = mongoose.models.user || model("User", userSchema);