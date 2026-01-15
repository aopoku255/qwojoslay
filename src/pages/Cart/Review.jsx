import React from "react";
import CheckoutNavLayout from "../../layout/CheckoutNavLayout";

const Review = () => {
  return (
    <CheckoutNavLayout>
      <div className="lg:grid lg:grid-cols-3 mb-4 gap-x-6 py-16 gap-y-6">
        <div className="col-span-2 flex flex-col gap-y-6"></div>
        <div className="col-span-1 mt-12 lg:mt-0"></div>
      </div>
    </CheckoutNavLayout>
  );
};

export default Review;
