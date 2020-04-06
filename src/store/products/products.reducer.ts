import { AppAction } from "../rootReducer.js";

import { ProductsState, PRODUCTS_FETCH_SUCCESS } from "./products.types";

const initialState: ProductsState = [];

const products = (state = initialState, action: AppAction): ProductsState => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default products;
