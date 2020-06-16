import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import config from "../config.json";

import { IComponentProductState } from "../reducers/component-product-reducer";
import { Product } from "../types/types";

export enum ComponentProductActionTypes {
  LISTPRODUCTS = "LISTPRODUCTS",
}

export interface IComponentProductGetAction {
  type: ComponentProductActionTypes.LISTPRODUCTS;
  list: Product[];
}

export type ComponentProductActions = IComponentProductGetAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getComponentProduct: ActionCreator<ThunkAction<
  Promise<any>,
  IComponentProductState,
  null,
  IComponentProductGetAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(config.api_server_domain + "/products");
      let result = await response.json();

      dispatch({
        list: result,
        type: ComponentProductActionTypes.LISTPRODUCTS,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
