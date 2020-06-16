import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { connect } from "react-redux";

import { IAppState } from "../store/store";
import { AddEditCompositeProductForm } from "../components/add-edit-composite-product-form";
import { saveCompositeProduct } from "../actions/composite-product-actions";

const mapStateToProps = (store: IAppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    saveCompositeProduct: (data: any) => dispatch(saveCompositeProduct(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditCompositeProductForm);
