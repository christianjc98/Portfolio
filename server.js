import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";

import connectDB from "./db/connect.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//routes
import projectRouter from "./routes/projectRoutes.js";

app.use(express.json());

app.use("/api/v1/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
