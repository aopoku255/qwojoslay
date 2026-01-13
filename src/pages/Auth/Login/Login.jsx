import FormInput from "../../../components/inputs/FormInput";
import logo from "../../../assets/logo.svg";
import { useLoginLogic } from "./useLoginLogic";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthLayout from "../../../layout/AuthLayout";

const Login = () => {
  const { register, errors, handleSubmit } = useLoginLogic();
  return (
    <AuthLayout>
      <div>
        <Link to="/">
          <img src={logo} alt="" className="mx-auto" />
        </Link>
        <h4 className="font-semibold text-lg text-gray-700 capitalize text-center mt-6">
          Welcome Back
        </h4>
        <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
          <FormInput
            label="Email"
            register={register}
            error={errors.email}
            name="email"
            autoComplete="email"
            placeholder="example@gmail.com"
            type="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }}
          />
          <FormInput
            label="Password"
            register={register}
            error={errors.password}
            name="password"
            placeholder="********"
            autoComplete="password"
            type="password"
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
              },
            }}
          />

          <Button
            fullWidth
            type="submit"
            style={{
              backgroundColor: "#D23F57",
              marginTop: "2rem",
              fontWeight: "bold",
              textTransform: "capitalize",
              boxShadow: "none",
              color: "white",
            }}
            variant="contained"
            sx={{
              height: 44,
            }}
          >
            Create Account
          </Button>
          <p className="text-gray-600 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold">
              Signup
            </Link>
          </p>
          <p className="text-gray-600 text-sm text-center mt-4 bg-gray-100 py-3 mb-4">
            Forgotten password?{" "}
            <Link to="#" className="underline text-gray-800">
              Reset
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
