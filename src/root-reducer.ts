import { configureStore } from "@reduxjs/toolkit";

import { currentUser } from "./features/current-user/current-user-reducer";
import { auth } from "./features/registration/reducers/auth.reducer";
import { departments } from "./features/department/all-departments/reducer/all-departments-reducer";

const store = configureStore({
  reducer: {
    currentUser,
    auth,
    departments,
  },
});
export default store;
