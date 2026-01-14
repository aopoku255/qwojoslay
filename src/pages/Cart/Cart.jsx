import React from "react";
import Header from "../../layout/Header";
import Layout1 from "../../layout/Layout1";
import Footer from "../../components/footer/Footer1";
import { Avatar } from "@mui/material";
import sweater from "../../assets/images/products/YellowCasualSweater.png";
import { Add, Clear, Remove } from "@mui/icons-material";
import { useCartCardDrawer } from "../../components/Drawer/useCartDrawerCard";
import { currency } from "../../lib";

const Cart = () => {
  const { orders, handleOrderDecrease, handleOrderIncrement, totalAmount } =
    useCartCardDrawer();
  return (
    <React.Fragment>
      <Header />
      <Layout1>
        <div className="lg:grid lg:grid-cols-3 py-16 gap-x-6">
          <div className="lg:w-full- col-span-2">
            <div className="flex items-start pr-4 justify-between bg-white shadow-2xl py-4 rounded-lg">
              <div className="flex items-center gap-x-8">
                <Avatar
                  src={sweater}
                  className="object-cover "
                  sx={{ width: 120, height: 120, objectFit: "cover" }}
                />
                <div className="flex flex-col gap-y-4">
                  <h4 className="font-semibold text-black/70">
                    Yellow Casual Sweater
                  </h4>
                  <p className="flex items-center text-sm gap-x-2 text-gray-400">
                    <span>{currency(120)}</span>
                    <span>x</span>
                    <span>{orders}</span>
                    <span className="text-red-800 font-semibold">
                      {currency(totalAmount)}
                    </span>
                  </p>
                  <div className="flex items-center gap-x-2">
                    <button
                      className="border border-red-700 hover:bg-red-50 rounded-sm h-8 w-8 flex justify-center items-center text-red-700"
                      onClick={handleOrderDecrease}
                    >
                      <Remove fontSize="small" className="text-red-700" />
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
          </div>
          <div className=" h-12 w-full col-span-1"></div>
        </div>
      </Layout1>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
