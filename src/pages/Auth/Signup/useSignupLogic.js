import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function useSignupLogic() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  //   useEffect(() => {
  //     trigger("confirmpassword");
  //   }, [password]);

  return { register, errors, handleSubmit, password };
}
