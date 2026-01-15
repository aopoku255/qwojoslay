import React from "react";
import CheckoutNavLayout from "../../layout/CheckoutNavLayout";
import CartCard5 from "../../components/cart/CartCard5";
import CartCard4 from "../../components/cart/CartCard4";

const CheckoutPayment = () => {
  return (
    <CheckoutNavLayout>
      <div className="lg:grid lg:grid-cols-3 mb-4 gap-x-6 py-16 gap-y-6">
        <div className="col-span-2 flex flex-col gap-y-6">
          <CartCard5 />
        </div>
        <div className="col-span-1 mt-12 lg:mt-0">
          <CartCard4 />
        </div>
      </div>
    </CheckoutNavLayout>
  );
};

export default CheckoutPayment;
