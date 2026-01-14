import { NavLink, Outlet } from "react-router-dom";

const CartHome = () => {
  return (
    <div>
      {/* Tabs */}
      <div className="tabs">
        <NavLink to="/cart" end className="tab">
          Overview
        </NavLink>

        <NavLink to="/cart/shipping" className="tab">
          Shipping
        </NavLink>

        <NavLink to="/cart/payment" className="tab">
          Payment
        </NavLink>
      </div>

      {/* Tab content */}
      <Outlet />
    </div>
  );
};

export default CartHome;
