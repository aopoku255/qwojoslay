import FormInput from "../../../components/inputs/FormInput";
import logo from "../../../assets/logo.svg";
import { useSignupLogic } from "./useSignupLogic";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthLayout from "../../../layout/AuthLayout";
import CheckBox from "../../../components/inputs/CheckBox";

const Signup = () => {
  const { register, errors, handleSubmit, password } = useSignupLogic();
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
            label="First Name"
            register={register}
            error={errors.firstname}
            name="firstname"
            placeholder="Andrews"
            type="text"
            rules={{
              required: "Please enter first name",
            }}
          />
          <FormInput
            label="Last Name"
            register={register}
            error={errors.lastname}
            name="lastname"
            placeholder="Opoku"
            type="text"
            rules={{
              required: "Please enter last name",
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
              required: "Please retype password",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
          />
          <div className="flex items-center flex-wrap gap-x-2 mt-3">
            <CheckBox
              register={register}
              name="termsandcondition"
              error={errors.termsandcondition}
              rules={{
                required: "You must accept our terms and conditions",
              }}
            />
            <p className="text-sm text-gray-600">By signing up, you agree to</p>
            <Link to="" className="text-md">
              Terms & Condition
            </Link>
            {errors.termsandcondition && (
              <p className="text-red-400 text-xs mt-1 px-4">
                {errors.termsandcondition.message}
              </p>
            )}
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
