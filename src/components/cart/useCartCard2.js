import { useState } from "react";
import { useForm } from "react-hook-form";

export function useCartCard2() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [watchValue, setWatchValue] = useState("");
  return {
    register,
    handleSubmit,
    errors,
    watchValue,
    setWatchValue,
  };
}
