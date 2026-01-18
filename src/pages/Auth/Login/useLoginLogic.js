import { useForm } from "react-hook-form";
import { useSigninMutation } from "../../../app/features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { setAuthCredentials } from "../../../app/features/auth/authSlice";
import { useDispatch } from "react-redux";

export function useLoginLogic() {
  const [signin] = useSigninMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const response = await signin(data);
    dispatch(setAuthCredentials({ ...response }));
    navigate("/");
  };

  return { register, errors, handleSubmit, handleLogin };
}
