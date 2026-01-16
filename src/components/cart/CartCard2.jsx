import React from "react";
import { currency } from "../../lib";
import FloatingInput from "../inputs/FloatingInput";
import { useCartCard2 } from "./useCartCard2";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const CartCard2 = () => {
  const { register, errors, handleSubmit } = useCartCard2();
  return (
    <div className=" bg-white shadow-xl py-4 rounded-lg px-4">
      <div className="flex justify-between mb-3">
        <p className="text-gray-400 text-sm">Total:</p>
        <p className="text-gray-600 font-semibold">{currency(460)}</p>
      </div>
      <div className="bg-gray-200/80 h-[0.25px] w-full"></div>
      <div className="flex gap-x-3 items-center my-4">
        <p className="font-semibold text-sm text-gray-600">
          Additional comments
        </p>
        <p className="text-xs bg-red-100/70 text-red-700 px-2 py-1 rounded-sm">
          Notes
        </p>
      </div>
      <textarea
        name=""
        id=""
        className="border border-gray-300 hover:border-gray-400 rounded-sm w-full h-36 resize-none focus:outline-red-600 p-3 text-sm text-gray-600"
      ></textarea>
      <div className="bg-gray-200/80 h-[0.25px] w-full my-3"></div>
      <form
        action=""
        onSubmit={handleSubmit((data) => console.log(data))}
        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4"
      >
        <FloatingInput
          label="Voucher"
          placeholder="Voucher"
          name="voucher"
          register={register}
          rules={{ required: "Voucher is required" }}
          error={errors.voucher}
        />

        <button
          type="submit"
          className="border border-red-700 w-full font-semibold sm:mt-0 lg:mt-0 mt-4 py-2 text-sm rounded-sm text-red-700 hover:bg-red-50/40 cursor-pointer"
        >
          Apply Voucher
        </button>
      </form>
      <div className="bg-gray-200/80 h-[0.25px] w-full my-3"></div>
      <Link
        to="/checkout"
        className="border border-red-700 w-full block text-center mt-4 py-2 text-sm font-semibold rounded-sm text-white bg-[#D23F57] cursor-pointer"
      >
        Checkout Now
      </Link>
    </div>
  );
};

export default CartCard2;
