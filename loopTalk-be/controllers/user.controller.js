import { User } from '../models/user.model.js'

const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    console.log({ name, username, password, bio })
    // await User.create({

    // })
    res.send("helllo")

}

export { newUser }