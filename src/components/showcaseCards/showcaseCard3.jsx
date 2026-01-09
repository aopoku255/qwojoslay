import { Link } from "react-router-dom";
import tshirt from "../../assets/images/products/t-shirt2.png";

const ShowCaseCard3 = () => {
  return (
    <div
      className="border border-gray-200 col-span-2 px-8 text-gray-600
      hover:shadow-lg hover:border-transparent
      transition-all duration-300 ease-out lg:py-0 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image – top on mobile, right on desktop */}
        <img src={tshirt} alt="T-shirt" className="mx-auto md:order-2" />

        {/* Text */}
        <div className="md:order-1">
          <p className="uppercase">MENS SHIRTS</p>
          <h3 className="font-bold text-3xl">Stylish Genuine Comfy T-shirts</h3>
          <p>One inner compartment with black satin lining</p>
          <Link to="#" className="text-sm font-bold mt-4 block">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseCard3;
