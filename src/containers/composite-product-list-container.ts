import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";

import { getCompositeProduct } from "../actions/composite-product-actions";
import { IAppState } from "../store/store";
import CompositeProductList from "../components/composite-product-list";

const mapStateToProps = (store: IAppState) => {
  return {
    compositeProducts: store.composite.list,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getCompositeProduct: () => dispatch(getCompositeProduct()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompositeProductList);
