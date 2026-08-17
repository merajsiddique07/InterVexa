import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.Slice.js";
export default configureStore({
  reducer: {
    user: userSlice,
  },
});
