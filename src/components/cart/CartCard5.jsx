import { FormControlLabel, Radio } from "@mui/material";
import { Paragraph } from "../Typography";
import { useCartCard2 } from "./useCartCard2";
import FloatingInput from "../inputs/FloatingInput";
import { Link } from "react-router-dom";
import FloatingSelect from "../inputs/FloatingSelect";

const CartCard5 = () => {
  const { register, errors, watchValue, setWatchValue } = useCartCard2();
  return (
    <div className="bg-white shadow-2xl flex flex-col rounded-md py-2">
      <div className="flex items-center gap-x-4 pb-8 px-8 py-8 ">
        <input
          type="radio"
          name="payment"
          id="momo"
          value="momo"
          checked={watchValue === "momo"}
          onChange={(e) => setWatchValue(e.target.value)}
          className="accent-[#D23F57] h-4 w-4 cursor-pointer"
        />
        <label
          htmlFor="momo"
          className="font-semibold text-sm text-gray-700 cursor-pointer"
        >
          Pay With MOMO
        </label>
      </div>
      {watchValue === "momo" ? (
        <>
          <div className="h-px w-full bg-gray-200/70"></div>
          <form
            action=""
            className="grid grid-cols-1 gap-x-8 gap-y-4 px-8 pb-8 pt-8"
          >
            <FloatingInput
              label="Full Name"
              placeholder=""
              name="fullname"
              register={register}
              rules={{ required: "Full name is required" }}
              error={errors.voucher}
            />
            <FloatingInput
              label="Mobile Number"
              placeholder=""
              name="mobile_number"
              register={register}
              rules={{ required: "Mobile number is required" }}
              error={errors.mobile_number}
            />
            <FloatingSelect
              label="Payment Method"
              name="payment"
              register={register}
              rules={{ required: "Payment method is required" }}
              error={errors.payment}
              options={[
                { label: "MTN", value: "mtn" },
                { label: "Telecel", value: "telecel" },
                { label: "Airtel Tigo", value: "airteltigo" },
              ]}
            />
          </form>
        </>
      ) : (
        <form></form>
      )}
      <div className="h-px w-full bg-gray-200/70"></div>
      <div className="flex items-center gap-x-4 pb-8 px-8 py-8 ">
        <input
          type="radio"
          name="payment"
          id="cash"
          value="cash"
          checked={watchValue === "cash"}
          onChange={(e) => setWatchValue(e.target.value)}
          className="accent-[#D23F57] h-4 w-4 cursor-pointer"
        />
        <label
          htmlFor="cash"
          className="font-semibold text-sm text-gray-700 cursor-pointer"
        >
          Cash On Delivery
        </label>
      </div>
      <div className="h-px w-full bg-gray-200/70"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 lg:gap-y-0 gap-x-8 my-4 px-8">
        <Link
          to="/checkout"
          className="border border-[#D23F57] text-center block rounded-sm py-2 text-sm font-semibold cursor-pointer text-[#D23F57] hover:bg-red-50/50 transition-all duration-300 ease-in-out"
        >
          Back To Checkout Details
        </Link>
        <Link
          to=""
          className="py-2 bg-[#D23F57] rounded-sm text-sm text-white font-semibold cursor-pointer text-center block"
        >
          Review
        </Link>
      </div>
    </div>
  );
};

export default CartCard5;
