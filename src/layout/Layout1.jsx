import React from "react";
import Header from "./Header";
import Footer from "../components/footer/Footer1";
import { useIndexLogic } from "../pages/useIndexLogic";
import LoginModal from "../components/Modal/LoginMaodal/LoginModal";
import CartDrawer from "../components/Drawer/CartDrawer";

const Layout1 = ({ children }) => {
  const {
    handleOpenDrawer,
    handleOpen,
    isOpenModel,
    isOpenDrawer,
    handleClose,
    handleCloseDrawer,
  } = useIndexLogic();
  return (
    <React.Fragment>
      <Header handleDrawer={handleOpenDrawer} handleModel={handleOpen} />
      <section className="bg-[#F6F9FC]  lg:px-8 sm:px-8 px-4 ">
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>
      <LoginModal isOpenModel={isOpenModel} handleClose={handleClose} />
      <CartDrawer
        isOpenDrawer={isOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Layout1;
