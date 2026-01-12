const CheckBox = ({ register, name, rules, error, label }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        {...register(name, rules)}
        className={`size-4 accent-indigo-900`}
      />

      {label && (
        <label htmlFor={name} className="text-sm text-gray-700 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
