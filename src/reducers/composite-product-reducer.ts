import { Reducer } from "redux";
import {
  CompositeProductActions,
  CompositeProductActionTypes,
} from "../actions/composite-product-actions";
import { CompositeProduct } from "../types/types";

export interface ICompositeProductState {
  readonly list: CompositeProduct[];
}

const initialState: ICompositeProductState = {
  list: [],
};

export const compositeProductReducer: Reducer<
  ICompositeProductState,
  CompositeProductActions
> = (state = initialState, action) => {
  switch (action.type) {
    case CompositeProductActionTypes.FETCH_COMPOSITE: {
      return {
        ...state,
        list: action.list,
      };
    }
    case CompositeProductActionTypes.SAVE_COMPOSITE: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
