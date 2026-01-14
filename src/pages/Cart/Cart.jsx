import React from "react";
import Layout1 from "../../layout/Layout1";
import Footer from "../../components/footer/Footer1";

import CartCard1 from "../../components/cart/CartCard1";
import { products } from "../../data/section2";
import CartCard2 from "../../components/cart/CartCard2";

const Cart = () => {
  return (
    <React.Fragment>
      <Layout1>
        <div className="lg:grid lg:grid-cols-3 mb-4 gap-x-6 py-16 gap-y-6">
          <div className="col-span-2 flex flex-col gap-y-6">
            {products.slice(0, 4).map((product) => (
              <CartCard1
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
          <div className="col-span-1 mt-12 lg:mt-0">
            <CartCard2 />
          </div>
        </div>
      </Layout1>
    </React.Fragment>
  );
};

export default Cart;
