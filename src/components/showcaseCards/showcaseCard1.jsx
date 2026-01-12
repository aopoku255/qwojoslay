import { Link } from "react-router-dom";
import shoe from "../../assets/images/products/shoes-1.png";
import nikeair from "../../assets/images/products/nikeair.png";
import puma from "../../assets/images/products/puma.png";
import NorthStarBlue from "../../assets/images/products/NorthStarBlue.png";
import Carousel from "../carousel/Carousel";

const ShowCaseCard1 = () => {
  return (
    <div
      className="border border-gray-200 rounded-md lg:row-span-2
      hover:shadow-lg hover:border-transparent
      transition-all duration-300 ease-out
      lg:flex lg:flex-col col-span-2 lg:col-span-1"
    >
      {/* Image */}
      <Carousel visibleSlides={1}>
        {[
          // <img src={shoe} alt="Shoe" className="block mx-auto" />,
          <img src={nikeair} alt="Shoe" className="block mx-auto h-72" />,
          <img src={puma} alt="Shoe" className="block mx-auto h-72" />,
          <img src={NorthStarBlue} alt="Shoe" className="block mx-auto h-72" />,
        ]}
      </Carousel>
      {/* Content */}
      <div className="px-6 md:px-8 mb-6 md:mb-8 text-gray-600">
        <p className="my-4 md:my-4 uppercase text-sm">Special Offer</p>
        <h3 className="font-bold text-2xl md:text-3xl mb-2">
          Comfortable Original Cotton Sneaker
        </h3>
        <p>One inner compartment with black satin lining</p>
        <Link to="#" className="text-xs font-bold mt-6 block">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default ShowCaseCard1;
