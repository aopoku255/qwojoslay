import { Fragment, useEffect, useState } from "react";

const Stepper = ({ selectedStep = 1, stepperList = [], onChange }) => {
  const [selected, setSelected] = useState(selectedStep - 1);

  const handleStepClick = (step, index) => {
    if (!step.disabled) {
      setSelected(index);
      onChange?.(index);
    }
  };

  useEffect(() => {
    setSelected(selectedStep - 1);
  }, [selectedStep]);

  return (
    <div className="flex flex-wrap items-center justify-center -my-1">
      {stepperList.map((step, index) => (
        <Fragment key={step.title}>
          {/* Step */}
          <button
            disabled={step.disabled}
            onClick={() => handleStepClick(step, index)}
            className={`
              px-6 py-1.5 my-1 text-sm font-semibold rounded-full transition cursor-pointer
              ${
                index <= selected
                  ? "bg-[#D23F57] text-white"
                  : "bg-red-100 text-[#D23F57]"
              }
              ${
                step.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#D23F57] hover:text-white transition-all duration-300 ease-in-out"
              }
            `}
          >
            {index + 1}. {step.title}
          </button>

          {/* Connector */}
          {index < stepperList.length - 1 && (
            <div
              className={`h-1 w-12 transition-all duration-300 ease-in-out ${
                index < selected ? "bg-[#D23F57]" : "bg-red-100"
              }`}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Stepper;
