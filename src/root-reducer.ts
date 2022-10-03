import { configureStore } from "@reduxjs/toolkit";

import { currentUser } from "./features/current-user/current-user-reducer";
import { auth } from "./features/registration/reducers/auth.reducer";
import { departments } from "./features/department/all-departments/reducer/all-departments-reducer";
import { users } from "./features/user/reducer/user-reducer";

const store = configureStore({
  reducer: {
    currentUser,
    auth,
    departments,
    users,
  },
});
export default store;
