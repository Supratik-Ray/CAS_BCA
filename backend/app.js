import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import notFoundMiddleware from "./middlewares/notFound.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
import authenticationMiddleware from "./middlewares/authentication.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", authenticationMiddleware, projectRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, () => console.log(`Server listening on port ${port}`));
};

start();
