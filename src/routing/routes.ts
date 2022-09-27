import AllDepartments from "../features/department/all-departments/components/AllDepartments";
import Home from "../features/home/components/Home";
import Login from "../features/registration/components/Login";
import Registration from "../features/registration/components/Registration";

const LOGGED_IN_DEFAULT_LAYOUT_ROUTES = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/all-departments",
    element: AllDepartments,
  },
];

const LOGGED_OUT_NO_LAYOUT_ROUTES = [
  {
    path: "/",
    element: Registration,
  },
  {
    path: "/login",
    element: Login,
  },
];

export { LOGGED_OUT_NO_LAYOUT_ROUTES, LOGGED_IN_DEFAULT_LAYOUT_ROUTES };
