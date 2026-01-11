import { useForm } from "react-hook-form";

export function useLoginLogic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return { register, errors, handleSubmit };
}
