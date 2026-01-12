import React from "react";
import CreditCardVerified from "../icons/CreditCardVerified";

const ShowCaseCard4 = ({ icon, title, subtitle, className }) => {
  return (
    <div
      className={`border border-gray-200 flex items-center justify-center flex-col gap-y-4 py-8 hover:shadow-lg hover:border-transparent
  transition-all duration-300 ease-out  ${className}`}
    >
      {icon}
      <h4 className="font-bold text-xl text-gray-700">{title}</h4>
      <p className=" text-sm text-gray-600 w-42 text-center">{subtitle}</p>
    </div>
  );
};

export default ShowCaseCard4;
