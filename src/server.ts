import app from "./app";

const PORT = process.env.port || 5000;

const startServer = async () => {
  try {
    // coonect to database first
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

startServer();
