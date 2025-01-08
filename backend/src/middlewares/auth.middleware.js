import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(404).json({ message: "Unauthorized - Token not found" });
    }

    const decodedData = jwt.decode(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedData.userid).select("-password");

    if (!user) {
      res.status(404).json({ message: "Unauthorized - User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
