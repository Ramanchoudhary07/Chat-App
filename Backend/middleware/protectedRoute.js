import jwt from "jsonwebtoken";

const protectedRoute = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({ message: "UnAuthorized: no token found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(400)
        .json({ message: "UnAuthorized: Invalid decoded token" });
    }
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log("error in protecting route: ", error);
    res.status(500).json({ error: "error in protecting route" });
  }
};

export default protectedRoute;
