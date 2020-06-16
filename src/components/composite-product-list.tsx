import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { CompositeProduct } from "../types/types";
import { CompositeProductItem } from './composite-product-item';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);
interface ICompositeProductListProps {
  getCompositeProduct: () => Promise<any>,
  compositeProducts: CompositeProduct[],
}

export default function CompositeProductList(props: ICompositeProductListProps) {
  const classes = useStyles();
  const { compositeProducts, getCompositeProduct } = props;

  useEffect(() => {
    getCompositeProduct();
  }, [getCompositeProduct]);

  return (<><Typography variant="h4" component="h1" gutterBottom>
    Composite Products List View
          </Typography>
    <List className={classes.root}>
      {compositeProducts.map((product) => <ListItem key={product.id}><CompositeProductItem {...product} /></ListItem>)}
    </List></>
  );
}

