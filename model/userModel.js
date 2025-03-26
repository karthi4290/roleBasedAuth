import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "manager", "user"],
  }
},{
    timestamps:true
});

export const User =  mongoose.model('User',userSchema);
