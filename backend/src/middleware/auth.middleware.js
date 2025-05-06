import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt; // Check for token in cookies
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      console.log("Invalid token");
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: Invalid token" });
    }

    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    req.user = user; // Attach user ID to request
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    console.error("Error in authentication middleware:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Authentication error" });
  }
};

export default isAuthenticated;
