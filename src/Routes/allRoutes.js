import { Index } from "../pages/index";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
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
  {
    path: "/checkout",
    component: Checkout,
  },
];

export { publicRoutes };
