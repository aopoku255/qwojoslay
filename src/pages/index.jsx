import Layout1 from "../layout/Layout1";
import Header from "../layout/Header";
import { useIndexLogic } from "./useIndexLogic";
import { Box, Drawer, Modal } from "@mui/material";
import logo from "../assets/logo.svg";
import FormInput from "../components/inputs/FormInput";
import SlayTextField from "../components/inputs/FormInput";
import Section1 from "../components/pagesections/Section1";

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
    <Layout1>
      <Header handleModel={handleOpen} handleDrawer={handleOpenDrawer} />

      <Section1 />
      <Modal
        open={isOpenModel}
        onClose={handleClose}
        className="flex justify-center items-center"
      >
        <div className="w-120 shadow-2xl bg-white flex flex-col px-16 mx-auto py-16 rounded-lg">
          <div className="">
            <img src={logo} alt="Logo" className="" />
            <h5 className="font-bold text-gray-600 my-12">
              Welcome to Qwojoslay
            </h5>
            <SlayTextField />
          </div>
        </div>
      </Modal>
      <Drawer open={isOpenDrawer} anchor="right" onClose={handleCloseDrawer}>
        <p>Drawer</p>
      </Drawer>
    </Layout1>
  );
};
