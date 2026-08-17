import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("Listening at port 8080");
  connectDB();
});
