import { connect } from "mongoose";

export const connectDb = async () => {
  try {
    const uri = process.env.DATABASE_URI;
    if (!uri) {
      throw new Error("DB_URI is not defined in environment variables");
    }
    await connect(uri);
    console.log("database connected sir!!");
  } catch (error: any) {
    console.log(error.message, "error at database connect");
    process.exit(1);
  }
};
