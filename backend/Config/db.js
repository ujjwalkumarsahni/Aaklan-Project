import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB Connected Successfully");

  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
