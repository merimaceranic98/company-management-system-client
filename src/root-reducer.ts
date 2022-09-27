import { configureStore } from "@reduxjs/toolkit";

import { currentUser } from "./features/current-user/current-user-reducer";
import { auth } from "./features/registration/reducers/auth.reducer";

const store = configureStore({
  reducer: {
    currentUser,
    auth,
  },
});
export default store;
