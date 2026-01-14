import React from "react";
import { Route, Routes } from "react-router-dom";
// import { publicRoutes } from "./allRoutes";
import { Index } from "../pages";
import { publicRoutes } from "./allRoutes";
import CartHome from "../pages/Cart/CartHome";
import Cart from "../pages/Cart/CartHome";

const index = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default index;
