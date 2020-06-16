import React from "react";
import { IComponentsPropType } from "../types/types";
import ProductList from '../containers/product-list-container';
import { Typography, Container } from "@material-ui/core";

export interface ICompositeProductProps {
  id: string,
  name: string,
  components: IComponentsPropType[],
}

export function CompositeProductItem(props: ICompositeProductProps) {
  const { name, components } = props;
  return (
    <Container>
      <Typography variant="h5">
        {name}
      </Typography>
      <ProductList components={components} />
    </Container>
  );
}
