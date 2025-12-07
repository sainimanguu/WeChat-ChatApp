import { generatetoken } from '../lib/utils.js';
import User from '../models/User.js'
import bcrypt from "bcryptjs"
import cloudinary from '../lib/cloudinary.js'

export const signup = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if (!fullName || !email || !password || !bio) {
            return res.json({
                success: false,
                message: "Mising deatails"
            })
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.json({
                success: false,
                message: "Account Already Exist"
            })
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt)


        const newUser = await User.create({ fullName, email, hashedPassword, bio });

        const token = generatetoken(newUser._id);

        res.json({
            success: true,
            userData: newUser, token,
            message: "Account Created successfully"
        })

    } catch (error) {
        console.log(error.message),
            res.json({
                success: false,
                message: error.message,
            })

    }
}

export const login = async () => {
    try {
        const { email, password } = req.body;

        const userData = await User.findOne({ email })

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.json({
                success: false,
                message: "Invalid credentials",
            })
        }

        const token = generatetoken(userData._id)

        res.json({
            success: true,
            userData: newUser, token,
            message: "Avccount created successfully"
        })
    }
    catch (error) {
        console.log(error.message),
            res.json({
                success: false,
                message: error.message,
            })
    }
}

//Controller to check user is auth or not

export const checkAuth = (req, res) => {
    res.json({
        success: true,
        user: req.user,
    });
}

export const updateProfile = async (req, res) => {
    try {
        const { profilePic, bio, fullName } = req.body;

        const userId = req.user._id;
        let updatedUser;

        if (!profilePic) {
            updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true })
        } else {
            const upload = await cloudinary.uploader.upload(profilePic);

            updatedUser = await User.findByIdAndUpdate(userId, { profilePic: upload.secure_url, bio, fullName }, { new: true });
        }

        res.json({
            success: true,
            updatedUser,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })
    }
}