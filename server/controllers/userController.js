import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/token.js ";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        error: "Username already exists.",
      });
    }

    if (email === "" || username === "" || password === "") {
      return res.status(401).json({
        error: "Not all required fields are filled.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        email: newUser.fullName,
        username: newUser.username,
      });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } catch (error) {
    console.log("Error in register controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ error: "Username and password are required." });

    const user = await User.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Wrong credentials",
      });
    }

    generateToken(user._id, res);

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "Logout succesful",
    });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(400).json({ error: "Server error" });
  }
};
