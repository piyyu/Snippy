const { UserModel } = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ msg: "user already exist" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "7d" });

        res.json({
            msg: "user created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "internal server error" });
    }
};

const signin = async (req, res) => {
    const {email, password} = req.body;

    const response = await UserModel.findOne({
        email: email
    })

    if(!response) {
        res.json({msg: "user not found"});
        return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);
    if(passwordMatch) {
        const token = jwt.sign({id: response._id.toString()}, JWT_SECRET);

        res.json({msg: "user logged in successfully", token: token})
    } else {
        res.json({
            msg: "wrong credentials"
        })
    }
}

module.exports = {
    signup,
    signin
};
