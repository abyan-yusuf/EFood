import { User } from "../models/userModels.js";
import JWT from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide your name, email and password" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send({message:"User already exists"});
    }
    console.log(name, email, password, phone, role);
    const newUser = new User({ name, email, password, phone, role });
    newUser.save();
    res.send({ message: "registered user" });
  } catch (error) {}
    console.error(error);
  }
;

export const allUsers = async (req, res) => {
  const allUsers = await User.find();
  return res.send({message: "All users", allUsers});
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide your email and password" });
    }
    const existingUser = await User.findOne({ email, password });
    if (!existingUser) {
      return res.status(400).send({
        message: "User does not exist with this email or wrong password",
      });
    }
    if (existingUser.password === password) {
      const token = JWT.sign({ _id: existingUser._id }, "shhhhh", { expiresIn: "7d" });
      res.send({ message: "Logged in successfully", user: existingUser, token });
    }
  } catch (error) {
    console.error(error);
  }
};
