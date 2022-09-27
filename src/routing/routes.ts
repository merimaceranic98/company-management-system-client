import Home from "../features/home/components/Home";
import Registration from "../features/registration/components/Registration";

const LOGGED_IN_DEFAULT_LAYOUT_ROUTES = [
  {
    path: "/",
    element: Home,
  },
];

const LOGGED_OUT_NO_LAYOUT_ROUTES = [
  {
    path: "/",
    element: Registration,
  },
];

export { LOGGED_OUT_NO_LAYOUT_ROUTES, LOGGED_IN_DEFAULT_LAYOUT_ROUTES };
