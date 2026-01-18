import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../../app/features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";

export function useSignupLogic() {
  const [signup, { isLoading, isSuccess, isError }] = useSignupMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const handleSignUp = async (data) => {
    const { firstName, lastName, email, password, termsAndConditions } = data;
    const dataToSend = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      termsAndConditions: termsAndConditions,
    };
    const response = await signup(dataToSend).unwrap();
    if (response?.message === "Account created successfully") {
      navigate("/login");
    }
  };

  return { register, errors, handleSubmit, handleSignUp, password };
}
