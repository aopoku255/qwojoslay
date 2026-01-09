import React from "react";

const Layout1 = ({ children }) => {
  return (
    <section className="bg-gray-50 h-screen lg:px-8 sm:px-8 px-4">
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default Layout1;
