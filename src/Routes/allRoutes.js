import { Index } from "../pages/index";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
import Cart from "../pages/Cart/Cart";
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
  {
    path: "/cart",
    component: Cart,
  },
];

export { publicRoutes };
