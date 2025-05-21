import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const SignUp = async (req, res) => {
    // get user detail from frontend
    // validation - is not empty
    // check if user already existed or not
    // check for images, check for avatar
    // upload them to cloudinary(anywhere) , avatar(images)
    // create  a user obj - create a entry in db
    // remove password and refresh token field from response
    // check user for creation
    // return res
    try {
        // get user detail from frontend
        const { username, email, password } = req.body;

        // Validation - check if fields are not empty
        if ([username, email, password].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new ApiError(403, "email already exists");
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        const payload = { user_id: newUser._id, email: newUser.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        });
        

       
        return res.status(201).json(new ApiResponse(201, newUser, "User created successfully"));
    } catch (err) {
        console.error(err);
        const errorResponse = new ApiResponse(err.statusCode || 500, null, err.message || "User creation failed");
        return res.status(errorResponse.statusCode).json(errorResponse);
    }
};

const LogIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid credentials");
        }

        // Generate token
        const payload = { user_id: user._id, email: user.email };
       
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        });

        return res.status(200).json(new ApiResponse(200, { message: "User login successful" }));
    } catch (err) {
        console.error(err);
        return res.status(err.statusCode || 500).json(new ApiResponse(err.statusCode || 500, null, err.message || "User login failed"));
    }
};



const LogOut = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json(new ApiResponse(200, null, "User logout successful"));
    } catch (err) {
        console.error(err);
        const errorResponse = new ApiResponse(err.statusCode || 500, null, err.message || "User logout failed");
        return res.status(errorResponse.statusCode).json(errorResponse);
    }
};
const checkAuthStatus = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ isLoggedIn: false, message: "Unauthorized: No token provided" });
    }
    
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        res.json({ isLoggedIn: true, user: verified });

    } catch {
        res.json({ isLoggedIn: false });
    }
};

export { SignUp, LogIn, LogOut, checkAuthStatus };