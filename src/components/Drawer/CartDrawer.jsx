import { Drawer } from "@mui/material";
import CartBag from "../icons/CartBag";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";
import CartDrawerCard from "./CartDrawerCard";
import { products } from "../../data/section2";
import { Clear } from "@mui/icons-material";

const CartDrawer = ({ isOpenDrawer, handleCloseDrawer }) => {
  return (
    <Drawer open={isOpenDrawer} anchor="right" onClose={handleCloseDrawer}>
      <div className="lg:w-96 md:w-120 w-[97vw] h-screen relative">
        <div className="flex justify-between items-center border-b border-gray-100 py-3 px-2">
          <div className="font-bold text-gray-600 p-4 flex items-center gap-x-2">
            <CartBag />
            <span className="text-sm">3 item</span>
          </div>
          <Clear onClick={handleCloseDrawer} className="cursor-pointer" />
        </div>
        <div className="h-[80%] overflow-y-scroll pb-16">
          {/* <div className="flex flex-col items-center justify-center mt-10 px-4 h-full">
            <img src={shopingbag} alt="shopping bag" className="lg:h-64" />
            <h5 className="font-bold text-gray-600 mt-6">Your bag is empty</h5>
            <p className="text-gray-400 text-center mt-2">
              Looks like you haven't added anything to your bag yet
            </p>
          </div> */}
          <div>
            {products.slice(0, 5).map((product) => (
              <CartDrawerCard
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={2}
                key={product.id}
              />
            ))}
          </div>
        </div>
        <Link
          to=""
          className="bg-[#D23F57] mx-4  text-center py-2.5 px-4 block rounded-sm text-sm text-white absolute bottom-8 left-0 right-0 hover:bg-red-700"
        >
          Checkout Now
        </Link>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
