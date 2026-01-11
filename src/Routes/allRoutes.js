import { Index } from "../pages/index";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
const publicRoutes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/login",
    component: Login,
  },
];

export { publicRoutes };
