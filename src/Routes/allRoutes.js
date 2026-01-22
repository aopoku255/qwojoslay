import { Index } from "../pages/index";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import CheckoutPayment from "../pages/Cart/CheckoutPayment";
import Review from "../pages/Cart/Review";
import { CONSTANTS } from "../utils/constants";
import ProductDetails from "../pages/products/ProductDetails";
import Products from "../pages/products/Products";
const routes = CONSTANTS.ROUTES.PUBLIC_ROUTES;

const publicRoutes = [
  {
    path: routes.HOME,
    component: Index,
  },
  {
    path: routes.SIGNUP,
    component: Signup,
  },
  {
    path: routes.LOGIN,
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
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/product/:slug",
    component: ProductDetails,
  },
];

export { publicRoutes };
