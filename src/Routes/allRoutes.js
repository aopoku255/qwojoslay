import { Index } from "../pages/index";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import CheckoutPayment from "../pages/Cart/CheckoutPayment";
import Review from "../pages/Cart/Review";
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
  {
    path: "/payment",
    component: CheckoutPayment,
  },
  {
    path: "/review",
    component: Review,
  },
];

export { publicRoutes };
