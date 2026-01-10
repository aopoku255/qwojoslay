import React from "react";

const Layout1 = ({ children }) => {
  return (
    <section className="bg-[#F6F9FC]  lg:px-8 sm:px-8 px-4 ">
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default Layout1;
