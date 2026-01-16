import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import ShopLayout1 from "./Layout1";

const stepperList = [
  { title: "Cart", disabled: false },
  { title: "Details", disabled: false },
  { title: "Payment", disabled: false },
  { title: "Review", disabled: true },
];

const CheckoutNavLayout = ({ children }) => {
  const [selectedStep, setSelectedStep] = useState(1);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleStepChange = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        navigate("/cart");
        break;
      case 1:
        navigate("/checkout");
        break;
      case 2:
        navigate("/payment");
        break;
      case 3:
        navigate("/review");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setSelectedStep(1);
        break;
      case "/checkout":
        setSelectedStep(2);
        break;
      case "/payment":
        setSelectedStep(3);
        break;
      case "/review":
        setSelectedStep(4);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <ShopLayout1>
      <div className="">
        {/* Hide stepper on mobile */}
        <div className="hidden sm:block">
          <Stepper
            stepperList={stepperList}
            selectedStep={selectedStep}
            onChange={handleStepChange}
          />
        </div>

        {children}
      </div>
    </ShopLayout1>
  );
};

export default CheckoutNavLayout;
