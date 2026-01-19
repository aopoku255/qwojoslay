import { Link } from "react-router-dom";
import Layout1 from "../../layout/Layout1";
import { products } from "../../data/section2";
import ProductsCard2 from "../../components/productsCard/ProductCard2";

const Products = () => {
  const links = [
    "DRESSES",
    "TROUSERS",
    "HOODIES",
    "SNEAKERS",
    "BAGS",
    "SLIPPERS",
    "SPRAY",
    "JEWELLERY",
    "OTHER",
  ];
  return (
    <Layout1>
      <div className="grid lg:grid-cols-4 py-8 gap-x-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-24 ">
            <div className="shadow-md py-6 rounded-lg bg-white ">
              <div className="px-8">
                <h5 className="text-sm font-semibold">Categories</h5>
                <div className="flex flex-col gap-y-3 my-4 text-sm capitalize text-gray-600">
                  {links.map((item) => (
                    <Link key={item} to="" className="hover:text-brand-red">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="h-px w-full bg-gray-100"></div>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="col-span-3">
          <div className="h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-x-4 gap-y-8 pb-16">
              {products.map((product, index) => (
                <ProductsCard2 product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Products;
