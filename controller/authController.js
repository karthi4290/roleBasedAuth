import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { userName, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userName, password: hashedPassword, role });
    const data = await newUser.save();
    return res.status(201).json({ message: `Data saved successfully${data}` });
  } catch (error) {
   return res.status(500).json({ message: "something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: "UserName not found" });
    }
    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, "jwtsecret", {
      expiresIn: "1h",
    });
    return res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
