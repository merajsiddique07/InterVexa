import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
export default app;
