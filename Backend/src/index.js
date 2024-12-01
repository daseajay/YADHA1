import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.router.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is started port ${PORT}`);
});
