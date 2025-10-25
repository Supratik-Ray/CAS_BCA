import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to database!");
  } catch (error) {
    console.log("Couldn't connect to database!");
    process.exit(1);
  }
};

export default connectDB;
