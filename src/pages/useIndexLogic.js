import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHomeQuery } from "../app/features/home/homeApiSlice";

export function useIndexLogic() {
  const [isOpenModel, setIsOpenModal] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);
  const handleOpenDrawer = () => setIsOpenDrawer(true);
  const handleCloseDrawer = () => setIsOpenDrawer(false);
  const { data: homeData } = useHomeQuery();

  return {
    isOpenModel,
    handleOpen,
    handleClose,
    isOpenDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
    homeData,
  };
}
