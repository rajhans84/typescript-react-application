import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";

import { getComponentProduct } from "../actions/component-product-actions";
import { IAppState } from "../store/store";
import { ProductList } from "../components/product-list";

const mapStateToProps = (store: IAppState) => {
  return {
    products: store.products.list,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getComponentProduct: () => dispatch(getComponentProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
