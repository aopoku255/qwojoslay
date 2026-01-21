import React from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./allRoutes";

const index = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
            exact={true}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default index;
