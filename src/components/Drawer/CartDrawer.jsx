import { Drawer } from "@mui/material";
import CartBag from "../icons/CartBag";
import close from "../../assets/icons/close.svg";
import shopingbag from "../../assets/logos/shopping-bag.svg";

const CartDrawer = ({ isOpenDrawer, handleCloseDrawer }) => {
  return (
    <Drawer open={isOpenDrawer} anchor="right" onClose={handleCloseDrawer}>
      <div className="lg:w-80 md:w-120 w-[97vw] h-screen">
        <div className="flex justify-between items-center">
          <div className="font-bold text-gray-600 p-4 flex items-center gap-x-2">
            <CartBag />
            <span>0 Item</span>
          </div>
          <img
            src={close}
            alt=""
            className="mx-2 cursor-pointer"
            onClick={handleCloseDrawer}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-10 px-4 h-[80%]">
          <img src={shopingbag} alt="shopping bag" className="lg:h-64" />
          <h5 className="font-bold text-gray-600 mt-6">Your bag is empty</h5>
          <p className="text-gray-400 text-center mt-2">
            Looks like you haven't added anything to your bag yet
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
