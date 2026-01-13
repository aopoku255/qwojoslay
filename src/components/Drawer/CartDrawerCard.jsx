import { Add, Remove, Clear } from "@mui/icons-material";
import sweater from "../../assets/images/products/YellowCasualSweater.png";
import { Avatar } from "@mui/material";
import { currency } from "../../lib";
import { useCartCardDrawer } from "./useCartDrawerCard";

const CartDrawerCard = ({
  name = "Silver High Neck Sweater",
  price = 210,
  image = sweater,
  quantity = 1,
}) => {
  const { handleOrderIncrement, handleOrderDecrease, orders } =
    useCartCardDrawer();
  return (
    <div className="flex py-4 items-center justify-between px-6 border-b border-gray-100 gap-x-3">
      <div className="flex flex-col items-center gap-y-1.5">
        <button
          onClick={handleOrderIncrement}
          className="h-6 w-6 p-3.5 border border-red-400 text-red-400 rounded-full flex items-center justify-center cursor-pointer"
        >
          <Add fontSize="small" />
        </button>
        <p>{orders}</p>
        <button
          disabled={orders === 1}
          onClick={handleOrderDecrease}
          className={`h-6 w-6 p-3.5 border ${
            orders === 1
              ? "border-gray-300 text-gray-300"
              : "border-red-400 text-red-400"
          }  rounded-full flex items-center justify-center cursor-pointer`}
        >
          <Remove fontSize="small" />
        </button>
      </div>
      <div>
        <Avatar
          src={image}
          sx={{
            width: 76,
            height: 76,
          }}
        />
      </div>
      <div className="flex flex-col col-span-2 gap-y-1.5">
        <h4 className="font-semibold text-sm text-ellipsis line-clamp-1 capitalize text-black/80">
          {name}
        </h4>
        <p className="text-gray-400 text-xs flex items-center gap-1">
          <span>{currency(price)}</span>
          <span>x</span>
          <span>{orders}</span>
        </p>
        <h4 className="font-semibold text-sm text-red-700">
          {currency(price * orders)}
        </h4>
      </div>
      <div className="">
        <button className=" text-gray-600 rounded-full hover:bg-gray-100 h-8 w-8 flex items-center justify-center cursor-pointer">
          <Clear fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default CartDrawerCard;
