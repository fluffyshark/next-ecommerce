import mongoose, { ConnectionStates } from "mongoose";

const dbConnect = (): void => {
  if (mongoose.connection.readyState >= ConnectionStates.connected) {
    return;
  }

  mongoose.set("strictQuery", false);

  console.log(process.env.DB_URI);
  if (!process.env.DB_URI) {
    throw new Error("DB_URI environment variable is not defined.");
  }

  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
