import React, { useState } from "react";
import Layout1 from "../../layout/Layout1";
import { useLocation } from "react-router-dom";
import { Rating } from "@mui/material";
import { currency } from "../../lib";

const ProductDetails = () => {
  const { state } = useLocation();

  const images = state?.images || [state?.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const colors = ["Black", "Blue", "Red"];
  const sizes = ["SM", "MD", "L", "XL", "XXL"];

  return (
    <Layout1>
      <div className="sm:grid sm:grid-cols-2 sm:items-center py-16 gap-x-12 grid gap-y-8">
        {/* LEFT: IMAGE GALLERY */}
        <div className="flex flex-col gap-y-4">
          {/* Main Image */}
          <div className=" rounded-md overflow-hidden">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-105 object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-x-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`border cursor-pointer rounded-sm overflow-hidden 
                  ${
                    selectedImage === img
                      ? "border-brand-red"
                      : "border-gray-300"
                  }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-20 h-20 object-cover hover:opacity-80"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="flex flex-col gap-y-4 items-start">
          <h3 className="text-3xl text-black/80 font-bold">{state?.name}</h3>

          <p className="flex gap-x-2">
            <span className="font-semibold text-gray-600">CATEGORY:</span>
            <span className="text-gray-600">HOODIE</span>
          </p>

          <div className="flex gap-x-2 items-center">
            <p className="text-gray-600">Rated:</p>
            <Rating value={3.7} readOnly sx={{ fontSize: 20 }} />
            <p className="font-semibold text-gray-600 text-sm">(70)</p>
          </div>

          {/* Colors */}
          <h4 className="font-semibold">Options</h4>
          <div className="flex gap-x-2">
            {colors.map((item) => (
              <label key={item} className="cursor-pointer">
                <input type="radio" name="colors" className="peer hidden" />
                <span
                  className="px-5 py-1.5 text-sm rounded-sm block bg-gray-200 
                  peer-checked:bg-brand-red peer-checked:text-white"
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          {/* Sizes */}
          <h4 className="font-semibold">Sizes</h4>
          <div className="flex gap-x-2 flex-wrap">
            {sizes.map((item) => (
              <label key={item} className="cursor-pointer">
                <input type="radio" name="sizes" className="peer hidden" />
                <span
                  className="px-5 py-1.5 text-sm rounded-sm block bg-gray-200 
                  peer-checked:bg-brand-red peer-checked:text-white"
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          <h2 className="font-bold text-3xl text-brand-red">
            {currency(state?.price)}
          </h2>

          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Stock Available:</span> 20
          </p>

          <button className="bg-brand-red text-white px-6 py-2.5 rounded-sm text-sm font-semibold">
            Add To Cart
          </button>
        </div>
      </div>
    </Layout1>
  );
};

export default ProductDetails;
