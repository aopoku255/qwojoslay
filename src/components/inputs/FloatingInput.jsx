import React from "react";

const FloatingInput = () => {
  return (
    <div class="relative">
      <input
        type="text"
        id="floating_outlined"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading rounded-sm border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
        placeholder=" "
      />
      <label
        for="floating_outlined"
        class="absolute text-sm bg-white text-gray-600 text-body duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-left bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        Floating outlined
      </label>
    </div>
  );
};

export default FloatingInput;
