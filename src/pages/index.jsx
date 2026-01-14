import Layout1 from "../layout/Layout1";
import Section1 from "../components/pagesections/Section1";
import React from "react";
import Section2 from "../components/pagesections/Section2";

export const Index = () => {
  return (
    <React.Fragment>
      <Layout1>
        <Section1 />
        <Section2 />
      </Layout1>
    </React.Fragment>
  );
};
