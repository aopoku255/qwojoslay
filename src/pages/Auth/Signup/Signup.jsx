import FormInput from "../../../components/inputs/FormInput";
import logo from "../../../assets/logo.svg";
import { useSignupLogic } from "./useSignupLogic";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthLayout from "../../../layout/AuthLayout";

const Signup = () => {
  const { register, errors, handleSubmit } = useSignupLogic();
  return (
    <AuthLayout>
      <div>
        <Link to="/">
          <img src={logo} alt="" className="mx-auto" />
        </Link>
        <h4 className="font-semibold text-lg text-gray-700 capitalize text-center mt-6">
          Create Your Account
        </h4>
        <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
          <FormInput
            label="Full Name"
            register={register}
            error={errors.fullname}
            name="fullname"
            placeholder="Andrews Opoku"
            type="text"
            rules={{
              required: "Please enter full name",
            }}
          />
          <FormInput
            label="Email"
            register={register}
            error={errors.email}
            name="email"
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
          <FormInput
            label="Retype Password"
            name="confirmpassword"
            type="password"
            placeholder="********"
            register={register}
            error={errors.confirmpassword}
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
          <div className="flex items-center flex-wrap gap-x-2 mt-3">
            <input
              type="checkbox"
              name="termsandcondition"
              id="termsandcondition"
              className="size-4"
            />
            <p className="text-sm text-gray-600">By signing up, you agree to</p>
            <Link to="" className="text-md">
              Terms & Condition
            </Link>
          </div>
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
            Already have an account?{" "}
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
