import { Add, Clear, Remove } from "@mui/icons-material";
import sweater from "../../assets/images/products/YellowCasualSweater.png";
import { currency } from "../../lib";
import { useCartCardDrawer } from "../Drawer/useCartDrawerCard";
import { Avatar } from "@mui/material";

const CartCard1 = ({
  name = "Yellow Casual Sweater",
  price = 120,
  image = sweater,
}) => {
  const { orders, handleOrderDecrease, handleOrderIncrement, totalAmount } =
    useCartCardDrawer();
  return (
    <div className="flex items-start pr-4 justify-between bg-white shadow-xl py-4 rounded-lg">
      <div className="flex items-center gap-x-8">
        <Avatar
          src={image}
          className="object-cover "
          sx={{ width: 120, height: 120, objectFit: "cover" }}
        />
        <div className="flex flex-col gap-y-4">
          <h4 className="font-semibold text-black/70">{name}</h4>
          <p className="flex items-center text-sm gap-x-2 text-gray-400">
            <span>{currency(price)}</span>
            <span>x</span>
            <span>{orders}</span>
            <span className="text-red-800 font-semibold">
              {currency(totalAmount)}
            </span>
          </p>
          <div className="flex items-center gap-x-2">
            <button
              disabled={orders === 1}
              className="border border-red-700 hover:bg-red-50 rounded-sm h-8 w-8 flex justify-center items-center text-red-700 disabled:border-gray-300"
              onClick={handleOrderDecrease}
            >
              <Remove
                fontSize="small"
                className="text-red-700 disabled:text-gray-300"
              />
            </button>
            <p>{orders}</p>
            <button
              className="border border-red-700 hover:bg-red-50 rounded-sm h-8 w-8 flex justify-center items-center text-red-700"
              onClick={handleOrderIncrement}
            >
              <Add fontSize="small" className="text-red-700" />
            </button>
          </div>
        </div>
      </div>
      <button>
        <Clear fontSize="small" />
      </button>
    </div>
  );
};

export default CartCard1;
