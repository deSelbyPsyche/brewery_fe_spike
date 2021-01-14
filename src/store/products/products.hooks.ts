import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  Product,
  ProductsFetchResponseData,
  PRODUCTS_FETCH_SUCCESS,
  ProductsAddParams,
  ProductsAddResponseData,
  PRODUCTS_ADD_SUCCESS
} from "./products.types";
import { getProducts } from "./products.selectors";

export const useFetchProducts = () =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<ProductsFetchResponseData> = await axios.get(
        `${process.env.REACT_APP_API_URL}/products`
      );

      return res.data.products;
    },
    cacheActionCreator: (data: Product[]) => ({
      type: PRODUCTS_FETCH_SUCCESS,
      payload: data
    }),
    cacheSelector: getProducts
  });

export const useAddProduct = () =>
  useApiMutate({
    requestFn: async (data: ProductsAddParams) => {
      const res: AxiosResponse<ProductsFetchResponseData> = await axios.post(
        `${process.env.REACT_APP_API_URL}/products`,
        data
      );

      return res.data.products;
    },
    cacheActionCreator: (data: ProductsAddResponseData) => ({
      type: PRODUCTS_ADD_SUCCESS,
      payload: data
    })
  });
