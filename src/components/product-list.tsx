import React, { useEffect } from "react";
import { IComponentsPropType, Product } from "../types/types";
import { isProduct, isGroup, getProductById } from "../utils";
import { ComponentProductItem } from "./component-product-item";
import { Box } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ProductListConnected from "../containers/product-list-container";

export interface IProductListProps {
  components: IComponentsPropType[];
  products: Product[];
  getComponentProduct: () => Promise<any>,
}

export function ProductList(props: IProductListProps) {
  const { components, products, getComponentProduct } = props;
  useEffect(() => {

    getComponentProduct()

  }, [getComponentProduct])
  const ComponentList = components && components.map((component) => {
    if (isProduct(component)) {
      return <ComponentProductItem {...component} key={component.productId} name={getProductById(products, component.productId)} />;
    }
    if (isGroup(component)) {
      return (
        <Box key="nested-group">
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: "36px" }}>
              <ListItemText>Group: {component.label}</ListItemText>
            </ListItem>
            {component.components && component.components.length > 0 && (
              <ProductListConnected {...component} />
            )}
          </List>
        </Box>
      );
    }
    return <div />;
  });
  if (components && components.length > 0) {
    return <>{ComponentList}</>;
  }
  return <div />;
}
