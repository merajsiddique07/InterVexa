import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const genToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWTSECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

export default genToken;
