import { useState } from "react";
import { useForm } from "react-hook-form";

export function useLoginModalLogic() {
  const [isOpenModel, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  return {
    isOpenModel,
    handleOpen,
    handleClose,
    register,
    handleSubmit,
    control,
    errors,
  };
}
