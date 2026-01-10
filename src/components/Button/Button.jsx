import React from "react";

const Button = ({ text }) => {
  return (
    <button className="flex items-center justify-center w-full py-2 bg-red-500 text-white">
      {text}
    </button>
  );
};

export default Button;
