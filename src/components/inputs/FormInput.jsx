import { useState } from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  rules,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="my-2 text-sm text-gray-600 font-semibold"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register(name, rules)}
          className={`p-3 w-full border rounded-sm focus:outline-red-600 pr-12 ${
            error
              ? "border-red-600 focus:ring-1 focus:ring-red-600"
              : "border-gray-300 hover:border-gray-500"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {error && (
        <span className="mt-1 text-sm text-red-400 px-4">{error.message}</span>
      )}
    </div>
  );
};

export default FormInput;
