import { configureStore } from "@reduxjs/toolkit";

import { currentUser } from "./features/current-user/current-user-reducer";
import { auth } from "./features/registration/reducers/auth.reducer";
import { departments } from "./features/department/all-departments/reducer/all-departments-reducer";
import { users } from "./features/user/reducer/user-reducer";
import { errors } from "./features/error/reducer/error-reducer";
import { genders } from "./features/genders/reducer/genders-reducer";
import { teams } from "./features/team/reducer/team-reducer";

const store = configureStore({
  reducer: {
    currentUser,
    auth,
    departments,
    users,
    errors,
    genders,
    teams,
  },
});
export default store;
