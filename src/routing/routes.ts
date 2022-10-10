import AllDepartments from "../features/department/all-departments/components/AllDepartments";
import Home from "../features/home/components/Home";
import Login from "../features/registration/components/Login";
import Registration from "../features/registration/components/Registration";
import GendersStatisticsPieChart from "../features/genders/components/GendersStatisticsPieChart";
import MyDepartment from "../features/department/my-department/components/MyDepartment";
import Teams from "../features/team/components/Teams";
import MyTeam from "../features/team/components/MyTeam";

const LOGGED_IN_DEFAULT_LAYOUT_ROUTES = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/all-departments",
    element: AllDepartments,
  },
  {
    path: "/statistics",
    element: GendersStatisticsPieChart,
  },
  {
    path: "/my-department",
    element: MyDepartment,
  },
  {
    path: "/all-teams",
    element: Teams,
  },
  {
    path: "/my-team",
    element: MyTeam,
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
