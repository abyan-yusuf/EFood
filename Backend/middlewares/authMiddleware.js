import JWT from "jsonwebtoken";
import { User } from "../models/userModels.js";

let decodedValue;

export const requireSignin = async (req, res, next) => {
  try {
    const tokenAvailable = req.headers.authorization;
    console.log(tokenAvailable);
    if (tokenAvailable) {
      const decode = JWT.verify(tokenAvailable, "shhhhh");
        console.log(decode);
        if (!decode) {
            return console.log("Invalid token")
      }
      decodedValue = decode._id;
      return next();
      }
  } catch (error) {
    console.error(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(decodedValue)
    console.log(user)
    if (user?.role === 0) {
      return res.status(401).send({
        message: "You are not admin"
      })
    }
    else {
      return next()
    }
  } catch (error) {
    console.error(error)
  }
 }