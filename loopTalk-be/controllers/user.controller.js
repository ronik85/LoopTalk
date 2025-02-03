import { User } from '../models/user.model.js'
import { sendToken } from '../utils/features.js';


// Create a new user and save it to the database and save token in cookie
const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    const avatar = {
        public_id: "adflj",
        url: "http://asdfadfs"
    }

    const user = await User.create({
        name,
        bio,
        username,
        password,
        avatar,
    }).select('-password');

    sendToken(res, user, 201, "User created Successfully");
}

// Login user and save token in cookie
const login = async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");

    if (!user) return res.status(404).json("Invalid Username or Password")

    const isMatch = await user.isPasswordValid(password);
    if (!isMatch)
        return res.status(404).json("Invalid Username or Password")

    sendToken(res, user, 200, `Welcome Back, ${user.name}`);
};

export { newUser, login }