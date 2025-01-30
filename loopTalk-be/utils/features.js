import mongoose from "mongoose"

const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbName: "LoopTalk" })
        .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
        .catch((err) => console.log(err))
}

export { connectDB }