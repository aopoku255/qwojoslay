import { Button, Card, Modal } from "@mui/material";
import FormInput from "../../inputs/FormInput";
import { Link } from "react-router-dom";
import { useLoginModalLogic } from "./useLoginModalLogic";
import logo from "../../../assets/logo.svg";
import google from "../../../assets/icons/google-1.svg";

const LoginModal = ({ isOpenModel, handleClose }) => {
  const { register, errors, handleSubmit, handleLogin } = useLoginModalLogic();
  return (
    <Modal
      open={isOpenModel}
      onClose={handleClose}
      // disableScrollLock
      className="flex justify-center items-center outline-none border-none lg:mx-0"
    >
      <Card className="w-130 bg-white flex flex-col md:px-12 px-4  py-16 rounded-lg outline-none border-none mx-4 ">
        <form onSubmit={handleSubmit(handleLogin)} className="">
          <div className="">
            <img src={logo} alt="Logo" className="block mx-auto" />
            <h5 className="font-bold text-gray-600 my-6 text-center">
              Welcome to Qwojoslay
            </h5>
            <FormInput
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              register={register}
              error={errors.email}
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
              name="password"
              type="password"
              placeholder="********"
              autoComplete="password"
              register={register}
              error={errors.password}
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
              Login
            </Button>

            <div className="flex mt-4 justify-center items-center text-gray-400 gap-x-4">
              <div className="h-px w-16 bg-gray-200 mt-2"></div>
              <p>or</p>
              <div className="h-px w-16 bg-gray-200 mt-2"></div>
            </div>

            {/* <Button
              fullWidth
              type="submit"
              style={{
                backgroundColor: "dodgerblue",
                marginTop: "1rem",
                fontWeight: "normal",
                textTransform: "capitalize",
                boxShadow: "none",
                color: "white",
              }}
              variant="contained"
              sx={{
                height: 44,
              }}
            >
              <img src={google} alt="" className="block mx-2" />
              Continue with google
            </Button> */}

            <p className="text-gray-600 text-sm text-center mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-gray-800">
                Sign Up
              </Link>
            </p>

            <p className="text-gray-600 text-sm text-center mt-4 bg-gray-100 py-3 mb-4">
              Forgotten password?{" "}
              <Link to="#" className="underline text-gray-800">
                Reset
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default LoginModal;
