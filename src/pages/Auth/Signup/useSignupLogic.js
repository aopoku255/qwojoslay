import { useForm } from "react-hook-form";

export function useSignupLogic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return { register, errors, handleSubmit };
}
