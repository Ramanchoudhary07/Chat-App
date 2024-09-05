import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import genrateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Wrong password" });
    }
    genrateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const boy_pic_url = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girl_pic_url = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const hashedPassword = await bcryptjs.hash(password, 10);
    const profilePic = gender === "male" ? boy_pic_url : girl_pic_url;
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic,
    });
    await newUser.save();
    if (newUser) {
      genrateTokenAndSetCookie(newUser._id, res);
      console.log("user:", newUser);
      return res.status(201).json("user created successfully");
    } else {
      res.status(400).json({ error: "Invalid data input" });
    }
  } catch (error) {
    console.log("error in signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out succesfully" });
  } catch (error) {
    console.log("error in signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
