import { TryCatch } from "./error.js";
import { LOOPTALK_TOKEN } from '../constants/config.js'
import { ErrorHandler } from "../utils/utility.js";

const isAuthenticated = TryCatch((req, res, next) => {
    const token = req.cookies[LOOPTALK_TOKEN];
    if (!token)
        return next(new ErrorHandler("Please login to access this route", 401));

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedData._id;

    next();
});

export { isAuthenticated }