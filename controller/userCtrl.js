const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel")

exports.registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(200).send({ message: "User Already Exist", success: false })
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        req.body.password = hashedPassword; //now we replace user password to hashpasword
        const newUser = new userModel(req.body)
        await newUser.save();
        res.status(201).send({ message: "Register Successfully", success: true })

    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, message: `Register Controller ${error.message}` })
    }
}

exports.loginController = async (req, res) => {
    try {
        const verifyUser = await userModel.findOne({ email: req.body.email })
        if (!verifyUser) {
            return res.status(200).json({ message: "User not found", success: false })
        }
        const isMatch = await bcrypt.compare(req.body.password, verifyUser.password)
        if (!isMatch) { return res.status(200).json({ message: "Invalid Password", success: false }) }

        const token = await jwt.sign({ id: verifyUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.status(201).json({ message: "Login Successfully", success: true, token })

    } catch (error) {
        res.status(500).json({ success: false, message: `Login Controller ${error.message}` })

    }
}