import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  INGREDIENT_TYPES_FETCH_SUCCESS,
  IngredientType,
  IngredientTypesFetchResponseData,
  IngredientTypesAddParams,
  INGREDIENT_TYPES_ADD_SUCCESS
} from "./ingredient-types.types";
import { getIngredientTypes } from "./ingredient-types.selectors";

export const useFetchIngredientTypes = () =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<IngredientTypesFetchResponseData> = await axios.get(
        `${process.env.REACT_APP_API_URL}/ingredient-types`
      );

      return res.data.ingredientTypes;
    },
    cacheActionCreator: (data: IngredientType[]) => ({
      type: INGREDIENT_TYPES_FETCH_SUCCESS,
      payload: data
    }),
    cacheSelector: getIngredientTypes
  });

export const useAddIngredient = () =>
  useApiMutate({
    requestFn: async (data: IngredientTypesAddParams) => {
      const res: AxiosResponse<IngredientTypesFetchResponseData> = await axios.post(
        `${process.env.REACT_APP_API_URL}/ingredients-types`,
        data
      );

      return res.data.ingredientTypes;
    },
    cacheActionCreator: (data: IngredientType) => ({
      type: INGREDIENT_TYPES_ADD_SUCCESS,
      payload: data
    })
  });
