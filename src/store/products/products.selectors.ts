import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { ProductId } from "./products.types";

export const getProducts = (state: AppState) => state.products;

export const getProductById = (id: ProductId) =>
  createSelector(getProducts, products =>
    products.find(product => product.product_id === id)
  );
