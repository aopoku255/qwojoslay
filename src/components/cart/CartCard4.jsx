import React from "react";
import { currency } from "../../lib";
import FloatingInput from "../inputs/FloatingInput";
import { useCartCard2 } from "./useCartCard2";

const CartCard4 = () => {
  const { register, errors, handleSubmit } = useCartCard2();
  return (
    <div className="bg-white shadow-2xl flex flex-col gap-y-2 p-3 rounded-md px-8 py-8">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">Subtotal:</p>
        <p className="font-semibold text-black/70 text-lg">{currency(2000)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">Delivery:</p>
        <p className="font-semibold text-black/70 text-lg">{currency(20)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">Discount:</p>
        <p className="font-semibold text-black/70 text-lg">{currency(0)}</p>
      </div>
      <div className="h-px w-full bg-gray-200/80 mt-4"></div>
      <div className="flex items-center justify-between my-4">
        <p></p>
        <p className="font-semibold text-black/70 text-2xl">{currency(2000)}</p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit((data) => console.log(data))}
        className="grid sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4"
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
          className="border border-red-700 w-full font-semibold lg:mt-4 py-2 text-sm rounded-sm text-red-700 hover:bg-red-50/40 cursor-pointer"
        >
          Apply Voucher
        </button>
      </form>
    </div>
  );
};

export default CartCard4;
