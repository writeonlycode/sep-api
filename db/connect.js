import mongoose from "mongoose";

export default function connectDB() {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@express-sandbox.m1fbp50.mongodb.net/sep-api-database?retryWrites=true&w=majority`;
  return mongoose.connect(uri);
}
