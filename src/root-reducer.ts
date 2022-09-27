import { configureStore } from "@reduxjs/toolkit";

import { currentUser } from "./features/current-user/current-user-reducer";

const store = configureStore({
  reducer: {
    currentUser,
  },
});
export default store;
