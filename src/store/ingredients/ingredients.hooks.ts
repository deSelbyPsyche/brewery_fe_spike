import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  INGREDIENTS_FETCH_SUCCESS,
  Ingredient,
  IngredientsFetchResponseData,
  IngredientsAddParams,
  INGREDIENTS_ADD_SUCCESS
} from "./ingredients.types";

export const useFetchIngredients = () =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<IngredientsFetchResponseData> = await axios.get(
        `${process.env.REACT_APP_API_URL}/ingredients`
      );

      return res.data.ingredients;
    },
    cacheActionCreator: (data: Ingredient[]) => ({
      type: INGREDIENTS_FETCH_SUCCESS,
      payload: data
    }),
    cacheSelector: state => state.ingredients
  });

export const useAddIngredient = () =>
  useApiMutate({
    requestFn: async (data: IngredientsAddParams) => {
      const res: AxiosResponse<IngredientsFetchResponseData> = await axios.post(
        `${process.env.REACT_APP_API_URL}/ingredients`,
        data
      );

      return res.data.ingredients;
    },
    cacheActionCreator: (data: Ingredient) => ({
      type: INGREDIENTS_ADD_SUCCESS,
      payload: data
    })
  });
