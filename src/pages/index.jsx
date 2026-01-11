import Layout1 from "../layout/Layout1";
import Header from "../layout/Header";
import { useIndexLogic } from "./useIndexLogic";
import Section1 from "../components/pagesections/Section1";
import LoginModal from "../components/Modal/LoginMaodal/LoginModal";
import CartDrawer from "../components/Drawer/CartDrawer";
import React from "react";
import Section2 from "../components/pagesections/Section2";
import Footer from "../components/footer/Footer1";

export const Index = () => {
  const {
    isOpenModel,
    handleOpen,
    handleClose,
    isOpenDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
  } = useIndexLogic();
  return (
    <React.Fragment>
      <Header handleModel={handleOpen} handleDrawer={handleOpenDrawer} />
      <Layout1>
        <Section1 />
        <Section2 />

        <LoginModal isOpenModel={isOpenModel} handleClose={handleClose} />
        <CartDrawer
          isOpenDrawer={isOpenDrawer}
          handleCloseDrawer={handleCloseDrawer}
        />
      </Layout1>
      <Footer />
    </React.Fragment>
  );
};
