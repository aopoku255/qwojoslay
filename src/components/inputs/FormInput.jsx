import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  rules,
  error,
  required,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="my-2 text-sm text-gray-700 font-normal">
        {label}
      </label>

      <div className="relative">
        <input
          required={required}
          id={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          {...register(name, rules)}
          autoComplete={autoComplete}
          className={`px-3 py-2.5 w-full border rounded-sm focus:outline-red-600 pr-12 placeholder:text-sm ${
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
            {showPassword ? (
              <div className="p-1 hover:bg-gray-200/50 cursor-pointer rounded-full flex items-center justify-center">
                <Visibility className="text-gray-400 text-sm" />
              </div>
            ) : (
              <div className="p-1 hover:bg-gray-200/50 cursor-pointer rounded-full flex items-center justify-center">
                <VisibilityOff className="text-gray-300" />
              </div>
            )}
          </button>
        )}
      </div>

      {error && (
        <span className="mt-1 text-xs text-red-400 px-4">{error.message}</span>
      )}
    </div>
  );
};

export default FormInput;
