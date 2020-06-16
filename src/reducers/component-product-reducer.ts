import { Reducer } from "redux";
import {
  ComponentProductActions,
  ComponentProductActionTypes,
} from "../actions/component-product-actions";
import { Product } from "../types/types";

export interface IComponentProductState {
  readonly list: Product[];
}

const initialState: IComponentProductState = {
  list: [],
};

export const componentProductReducer: Reducer<
  IComponentProductState,
  ComponentProductActions
> = (state = initialState, action) => {
  switch (action.type) {
    case ComponentProductActionTypes.LISTPRODUCTS: {
      return {
        ...state,
        list: action.list,
      };
    }
    default:
      return state;
  }
};
