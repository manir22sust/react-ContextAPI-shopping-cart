import React from "react";

export const SingleProduct = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" style={{ height: "200px" }} />
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.inStock}</div>
      <div>{product.fastDelivery}</div>
      <div>{product.ratings}</div>
    </div>
  );
};
