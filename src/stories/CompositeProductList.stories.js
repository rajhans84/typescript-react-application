import React from "react";
import { CompositeProductList } from "../components/composite-product-list";

const data = [
  {
    id: "efd0dab3-4813-44f0-98bc-ea3366582498",
    name: "Example 1",
    components: [
      {
        type: "PRODUCT",
        quantity: 1,
        productId: "ba7a0995-4193-4589-8150-54a3cef5f2c6",
      },
    ],
  },
  {
    id: "0ddaf224-92d0-48c4-b3c3-3c991ff8dd01",
    name: "Example 2",
    components: [
      {
        type: "GROUP",
        label: "Nut and Bolt set",
        components: [
          {
            type: "PRODUCT",
            quantity: 1,
            productId: "990650ee-ee52-449c-b53e-b55260ff8734",
          },
          {
            type: "PRODUCT",
            quantity: 1,
            productId: "172cc52d-8259-461d-bcf0-72b8e1390450",
          },
        ],
      },
    ],
  },
  {
    id: "fdb6b185-2844-429d-888b-f7aa9e714dab",
    name: "Example 3",
    components: [
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
    ],
  },
];

export const CompositeProductListView = () => (
  <CompositeProductList products={data} />
);

export default {
  title: "Composite Product List View",
  component: CompositeProductListView,
};
