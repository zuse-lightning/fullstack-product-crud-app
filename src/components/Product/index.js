import React from "react";
const BASE_API_URL = "http://localhost:8081";

const Product = ({
  productId,
  productThumbnail,
  productTitle,
  productPrice,
  productDescription,
  availableQuantity,
}) => {
  return (
    <>
      <div className="border-2 rounded overflow-hidden flex flex-col">
        {productThumbnail ? (
          <img
            className="h-52 w-full object-cover"
            alt={productId + "-thumbnail"}
            src={`${BASE_API_URL}/uploads/${productThumbnail}`}
          />
        ) : (
          <img
            className="h-52 w-full object-cover"
            alt={productId + "-thumbnail"}
            src={`${BASE_API_URL}/uploads/sample.png`}
          />
        )}
        <div className="flex flex-col p-4">
          <h4 className="mb-1 text-xl font-medium mt-5">{productTitle}</h4>
          <p className="text-lg mb-4">{productDescription}</p>
          <div className="flex items-center justify-between">
            <p className="py-1 px-3 bg-slate-200 w-fit text-2xl font-semibold rounded">
              ₹ {productPrice}
            </p>
            <p className="font-bold text-xl">
              {availableQuantity > 0
                ? `In Stock: ${availableQuantity}`
                : "Out of Stock"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;