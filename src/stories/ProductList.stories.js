import React from "react";
import { ProductList } from "../components/product-list";

const data = [
  {
    type: "PRODUCT",
    quantity: 1,
    productId: "ba7a0995-4193-4589-8150-54a3cef5f2c6",
  },
  {
    type: "PRODUCT",
    quantity: 4,
    productId: "7d5350b9-65d9-4c0f-9ebb-cc18103325a8",
  },
  {
    type: "GROUP",
    label: "Legs",
    components: [
      {
        type: "PRODUCT",
        quantity: 4,
        productId: "94daaf0b-ec73-4052-aba0-9b0c5d502417",
      },
      {
        type: "GROUP",
        label: "Fasteners",
        components: [
          {
            type: "PRODUCT",
            quantity: 12,
            productId: "990650ee-ee52-449c-b53e-b55260ff8734",
          },
          {
            type: "PRODUCT",
            quantity: 12,
            productId: "172cc52d-8259-461d-bcf0-72b8e1390450",
          },
        ],
      },
    ],
  },
];

export const ProductListView = () => <ProductList components={data} />;

export default {
  title: "Product List View",
  component: ProductListView,
};
