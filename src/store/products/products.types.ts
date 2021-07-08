// Entities

export type ProductId = number;

export interface Product {
  product_id: ProductId;
  name: string;
  purchase_cost: number;
}

// Action types

export const PRODUCTS_FETCH_SUCCESS = "@@products/FETCH_SUCCESS";
export const PRODUCTS_FETCH_BY_ID_SUCCESS = "@@products/FETCH_BY_ID_SUCCESS";
export const PRODUCTS_ADD_SUCCESS = "@@products/ADD_SUCCESS";

// Products Api

export interface ProductsFetchResponseData {
  products: Product[];
}
export interface ProductsAddParams {
  name: string;
}
export interface ProductsAddResponseData {
  product: Product;
}

// Actions

interface ProductsFetchSuccess {
  type: typeof PRODUCTS_FETCH_SUCCESS;
  payload: Product[];
}

interface ProductsAddSuccess {
  type: typeof PRODUCTS_ADD_SUCCESS;
  payload: ProductsAddResponseData;
}

export type ProductsAction = ProductsFetchSuccess | ProductsAddSuccess;

// State

export type ProductsState = Product[];
