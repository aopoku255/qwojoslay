import ProductsCard1 from "../productsCard/ProductsCard1";
import ProductsCard2 from "../productsCard/ProductCard2";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { products } from "../../data/section2";
import light from "../../assets/images/products/bglight.png";
import BlackFriday from "../BlackFriday";
import Section4 from "../Section4";

const Section2 = () => {
  return (
    <div className="mt-16">
      <Section4 products={products} />

      <BlackFriday />

      <div className="lg:flex lg:items-center lg:justify-between mt-16 hidden">
        <h3 className="capitalize text-xl font-bold text-gray-800">
          Deals of the day
        </h3>
        <div className="group">
          <Link to="" className="flex items-center gap-2">
            More Products
            <img src={arrowRight} alt="" className="h-4" />
          </Link>
          <div className="w-0 h-0.5 bg-black group-hover:w-32 transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-x-4 gap-y-8 mt-8">
        {products.map((product, index) => (
          <ProductsCard2 product={product} key={index} />
        ))}
      </div>
      {/* <div className="grid grid-cols-2 mt-16 gap-6">
        <div className=" rounded-sm  bg-gray-100 py-8 px-4 shadow-sm flex items-center justify-between bg-[url(assets/images/products/bag.png)] bg-no-repeat bg-right bg-contain">
          <div>
            <p className="font-semibold text-lg">Fast Delivery</p>
            <h3 className="text-2xl font-bold text-gray-700">
              Delievery Through Nationwide
              <div className="h-0.5 w-28 bg-gray-700 mt-4"></div>
            </h3>
            <p className="text-xl mt-4">
              Only From{" "}
              <span className="text-2xl font-semibold text-red-700 ">
                ₵20.00
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="border rounded-sm border-gray-300 py-8 px-4">
          <p className="font-semibold text-lg">Fast Delivery</p>
        </div>
      </div> */}
    </div>
  );
};

export default Section2;
