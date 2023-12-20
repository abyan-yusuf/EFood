import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./configuration/db.js";
import router from "./routes/authRouter.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 2012;

// Connecting to the router
app.use("/api/v1/users", router);

// Connecting to Database
connectToDB();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log("Your server is running on port", port);
});
