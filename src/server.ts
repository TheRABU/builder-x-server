import app from "./app";
import { connectDb } from "./db/ConnectDatabase";

const PORT = process.env.port || 5000;

const startServer = async () => {
  try {
    // coonect to database first
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

startServer();
