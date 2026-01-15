import { Grid } from "@mui/material";
import FloatingInput from "../inputs/FloatingInput";
import { useCartCard2 } from "./useCartCard2";
import { Link } from "react-router-dom";

const CartCard3 = () => {
  const { register, errors } = useCartCard2();
  return (
    <div className="bg-white py-4 px-8 shadow-2xl rounded-md">
      <h4 className="font-semibold text-gray-700 text-sm my-4">
        Delivery Address
      </h4>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
        <FloatingInput
          label="Full Name"
          name="full_name"
          register={register}
          rules={{ required: "Full Name is required" }}
          error={errors.full_name}
        />
        <FloatingInput
          label="Email"
          name="email"
          register={register}
          rules={{ required: "Email is required" }}
          error={errors.email}
        />
        <FloatingInput
          label="Phone Number"
          name="phone_number"
          register={register}
          rules={{ required: "Phone Number is required" }}
          error={errors.phone_number}
        />
        <FloatingInput
          label="City"
          name="city"
          register={register}
          rules={{ required: "City is required" }}
          error={errors.city}
        />
        <FloatingInput
          label="Town"
          name="town"
          register={register}
          rules={{ required: "Town is required" }}
          error={errors.town}
        />
        <FloatingInput
          label="Address"
          name="address"
          register={register}
          rules={{ required: "Address is required" }}
          error={errors.address}
        />
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-4 lg:gap-y-0 gap-x-8 my-4">
        <Link
          to="/cart"
          className="border border-[#D23F57] text-center block rounded-sm py-2 text-sm font-semibold cursor-pointer text-[#D23F57] hover:bg-red-50/50 transition-all duration-300 ease-in-out"
        >
          Back To Cart
        </Link>
        <Link
          to="/payment"
          className="py-2 bg-[#D23F57] rounded-sm text-sm text-white font-semibold cursor-pointer text-center block"
        >
          Proceed To Payment
        </Link>
      </div>
    </div>
  );
};

export default CartCard3;
