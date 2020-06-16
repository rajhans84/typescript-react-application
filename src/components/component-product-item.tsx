import React from "react";
import { ComponentProduct } from "../types/types";
import { Box, Grid, Typography, Link } from "@material-ui/core";

export const ComponentProductItem = ({ type, productId, quantity, name }: ComponentProduct) => {
  //TODO:  Get product name on load
  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="overline" display="block" gutterBottom>
                {type}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{name}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="overline" display="block" gutterBottom>
                Quantity
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{quantity}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item></Grid>{" "}
            <Grid item>
              <Typography variant="h6">
                <Link>Edit</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
