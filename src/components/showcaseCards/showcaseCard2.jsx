import { Link } from "react-router-dom";
import jacket from "../../assets/images/products/jacket.png";
import Carousel from "../carousel/Carousel";
const ShowCaseCard2 = () => {
  return (
    <div
      className="border border-gray-200 col-span-2 px-8 text-gray-600
  hover:shadow-lg hover:border-transparent
  transition-all duration-300 ease-out lg:py-0 py-8"
    >
      <Carousel visibleSlides={1}>
        {[
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Image first on small screens */}
            <img
              src={jacket}
              alt="Jacket"
              className="h-52 mx-auto md:order-2"
            />

            {/* Text */}
            <div className="md:order-1">
              <p className="uppercase">Jacket</p>
              <h3 className="font-bold text-3xl">
                Minimalist Genuine Cotton Jacket
              </h3>
              <p>One inner compartment with black satin lining</p>
              <Link to="#" className="text-sm font-bold mt-4 block">
                SHOP NOW
              </Link>
            </div>
          </div>,
        ]}
      </Carousel>
    </div>
  );
};

export default ShowCaseCard2;
