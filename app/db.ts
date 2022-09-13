import mongoose from "mongoose";

export default mongoose.connect(process.env.DB_URL as string, {
  dbName: process.env.DB_NAME,
});
