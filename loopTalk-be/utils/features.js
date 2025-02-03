import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const cookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
};

const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbName: "LoopTalk" })
        .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
        .catch((err) => console.log(err))
}

const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.status(code).cookie("loopTalk-token", token, cookieOptions).json({
        success: true,
        user,
        message,
    });
};

const emitEvent = (req, event, users, data) => {
    // const io = req.app.get("io");
    // const usersSocket = getSockets(users);
    // io.to(usersSocket).emit(event, data);
};
export { connectDB, cookieOptions, emitEvent, sendToken };
