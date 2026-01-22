import ProductsCard1 from "../productsCard/ProductsCard1";
import ProductsCard2 from "../productsCard/ProductCard2";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
// import light from "../../assets/images/products/bglight.png";
import BlackFriday from "../BlackFriday";
import Section4 from "../Section4";
import { useSection2Logic } from "./useSection2Logic";

const Section2 = () => {
  const { products, isLoading } = useSection2Logic();

  return (
    <div className="mt-16">
      <Section4 products={products} />

      <BlackFriday />

      <div className="lg:flex lg:items-center lg:justify-between mt-16 hidden">
        <h3 className="capitalize text-xl font-bold text-gray-800">
          Deals of the day
        </h3>
        <div className="group">
          <Link to="/products" className="flex items-center gap-2">
            More Products
            <img src={arrowRight} alt="" className="h-4" />
          </Link>
          <div className="w-0 h-0.5 bg-black group-hover:w-32 transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-x-4 gap-y-8 mt-8 pb-16">
        {isLoading ? (
          <div>Loading...</div>
        ) : products?.length ? (
          products.map((product) => (
            <ProductsCard2 product={product} key={product.id} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Section2;
