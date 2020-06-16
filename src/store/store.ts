import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose,
} from "redux";
import thunk from "redux-thunk";

import {
  compositeProductReducer,
  ICompositeProductState,
} from "../reducers/composite-product-reducer";

import {
  componentProductReducer,
  IComponentProductState,
} from "../reducers/component-product-reducer";

export interface IAppState {
  composite: ICompositeProductState;
  products: IComponentProductState;
}

const rootReducer = combineReducers<IAppState>({
  composite: compositeProductReducer,
  products: componentProductReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
