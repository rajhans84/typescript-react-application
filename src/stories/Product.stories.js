import React from "react";
import { ComponentProductItem } from "../components/component-product-item";

export const SingleProduct = () => (
  <ComponentProductItem
    {...{
      type: "PRODUCT",
      productId: "ba7a0995-4193-4589-8150-54a3cef5f2c6",
      quantity: 1,
    }}
    name={"Something"}
  />
);

export default {
  title: "Single Product View",
  component: SingleProduct,
};
