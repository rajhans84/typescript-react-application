import React from 'react';

import { Route, Switch, Link, useParams } from "react-router-dom";

import CompositeProductList from './containers/composite-product-list-container';
import AddEditCompositeProductForm from './containers/add-edit-composite-product-form-container';
import { List, ListItem, Grid } from '@material-ui/core';


export default function App() {
  const OpenForm = () => {
    const { id } = useParams();
    console.log(id);
    return <AddEditCompositeProductForm id={id} />
  }
  return (
    <Grid>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/composite-products">Composite Product List</Link>
        </ListItem>
        <ListItem>
          <Link to="/composite-products/add">Add</Link>
        </ListItem>
      </List>
      <Switch>
        <Route path="/composite-products" exact component={CompositeProductList} />
        <Route path="/composite-products/add" component={OpenForm} />
        <Route path="/composite-products/:id" component={OpenForm} />
      </Switch>
    </Grid>
  );
}

