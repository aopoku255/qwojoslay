import Layout1 from "../layout/Layout1";
// import Section1 from "../components/pagesections/Section1";
import React, { lazy, Suspense } from "react";
// import Section2 from "../components/pagesections/Section2";

const Section1 = lazy(() => import("../components/pagesections/Section1"));
const Section2 = lazy(() => import("../components/pagesections/Section2"));

export const Index = () => {
  return (
    <React.Fragment>
      <Layout1>
        <Suspense fallback={<div>Loading</div>}>
          <Section1 />
        </Suspense>
        <Section2 />
      </Layout1>
    </React.Fragment>
  );
};
