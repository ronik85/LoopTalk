import { User } from '../models/user.model.js'

const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    const avatar = {
        public_id: "adflj",
        url: "http://asdfadfs"
    }

    await User.create({
        name,
        username,
        password,
        bio,
        avatar
    })
    res.send("helllo")
}
 
export { newUser }