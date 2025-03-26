import mongoose from "mongoose";

export const dbConn = async (url) => {
  try {
    if (mongoose.connection.readyState === 0) {
      console.log("MongoDB disconnected");
    }
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
