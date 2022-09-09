import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Project from "./models/Project.js";

const start = async () => {
  try {
    connectDB(process.env.MONGO_URL);

    const project = {
      title: "Jobify",
      description:
        "Job tracking site builded from a course with React and NodeJs",
      imageUrl:
        "https://i.ibb.co/StyyNcW/Screenshot-from-2022-09-06-17-50-27.jpg",
      websiteUrl: "https://jobify-christian-janssen.herokuapp.com/landing",
    };
    await Project.create(project);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
