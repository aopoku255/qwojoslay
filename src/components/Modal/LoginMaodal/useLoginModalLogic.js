import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSigninMutation } from "../../../app/features/auth/authApiSlice";
import { setAuthCredentials } from "../../../app/features/auth/authSlice";
import { useDispatch } from "react-redux";

export function useLoginModalLogic() {
  const [isOpenModel, setIsOpenModal] = useState(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);
  const [signin] = useSigninMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleLogin = async (data) => {
    const response = await signin(data);

    dispatch(setAuthCredentials({ ...response }));
  };
  return {
    isOpenModel,
    handleOpen,
    handleClose,
    register,
    handleSubmit,
    handleLogin,
    control,
    errors,
  };
}
