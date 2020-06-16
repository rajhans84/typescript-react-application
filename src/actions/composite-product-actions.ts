import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import config from "../config.json";

import { ICompositeProductState } from "../reducers/composite-product-reducer";
import { CompositeProduct } from "../types/types";

export enum CompositeProductActionTypes {
  FETCH_COMPOSITE = "FETCH_COMPOSITE",
  SAVE_COMPOSITE = "SAVE_COMPOSITE",
}

export interface ICompositeProductGetAction {
  type: CompositeProductActionTypes.FETCH_COMPOSITE;
  list: CompositeProduct[];
}
export interface ICompositeProductSaveAction {
  type: CompositeProductActionTypes.SAVE_COMPOSITE;
  status: any;
}

export type CompositeProductActions =
  | ICompositeProductGetAction
  | ICompositeProductSaveAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getCompositeProduct: ActionCreator<ThunkAction<
  Promise<any>,
  ICompositeProductState,
  null,
  ICompositeProductGetAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        config.api_server_domain + "/composite-products"
      );
      let result = await response.json();

      dispatch({
        list: result,
        type: CompositeProductActionTypes.FETCH_COMPOSITE,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const saveCompositeProduct: ActionCreator<ThunkAction<
  Promise<any>,
  ICompositeProductState,
  null,
  ICompositeProductGetAction
>> = (opts) => {
  console.log("request recieved with data:", opts, JSON.stringify(opts));
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        config.api_server_domain + "/composite-products",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(opts),
        }
      );
      let result = await response.json();
      console.log("save request returned :", result);
      dispatch({
        status: "success",
        type: CompositeProductActionTypes.SAVE_COMPOSITE,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
