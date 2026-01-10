import { Button } from "@mui/material";
import yellowswatter from "../../assets/images/products/YellowCasualSweater.png";
import Eye from "../icons/Eye";
import Heart from "../icons/Heart";

const ProductsCard1 = ({ image, name, price }) => {
  return (
    <div className="group shadow-sm relative bg-white px-4 py-4 hover:border hover:border-gray-400 rounded-md">
      <img
        src={image}
        alt=""
        className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <Eye className="text-gray-200 absolute top-10 right-4 hidden opacity-0 group-hover:opacity-100 group-hover:transition-transform duration-300" />
      <Heart className="text-gray-200 absolute top-20 right-4 hidden opacity-0 group-hover:opacity-100" />
      <p className="text-center text-gray-600">{name}</p>
      <h5 className="text-center font-bold mt-3">₵{price}.00</h5>
      <button className="flex justify-center items-center mx-auto border border-black/60 px-8 lg:py-1 py-3 rounded-sm w-full hover:bg-black hover:text-white">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductsCard1;
