import { useState } from "react";

export function useIndexLogic() {
  const [isOpenModel, setIsOpenModal] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);
  const handleOpenDrawer = () => setIsOpenDrawer(true);
  const handleCloseDrawer = () => setIsOpenDrawer(false);

  return {
    isOpenModel,
    handleOpen,
    handleClose,
    isOpenDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
  };
}
