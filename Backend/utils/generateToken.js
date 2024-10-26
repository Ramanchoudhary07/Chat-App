import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const genrateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  console.log("TOKEN: ", token);

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  console.log("response cookie: ", res.cookie);
};

export default genrateTokenAndSetCookie;
