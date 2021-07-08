import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  BATCH_INGREDIENTS_FETCH_SUCCESS,
  BatchIngredient,
  BatchIngredientsFetchResponseData,
  BatchIngredientsAddParams,
  BATCH_INGREDIENTS_ADD_SUCCESS,
} from "./batch-ingredients.types";
import { BatchId } from "../batches/batches.types";
import { getBatchIngredientByBatchId } from "./batch-ingredients.selectors";

export const useFetchBatchIngredients = (batch_id: BatchId) =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<BatchIngredientsFetchResponseData> =
        await axios.get(`${process.env.REACT_APP_API_URL}/batch-ingredients`, {
          params: { batch_id },
        });

      return res.data.batchIngredients;
    },
    cacheActionCreator: (data: BatchIngredient[]) => ({
      type: BATCH_INGREDIENTS_FETCH_SUCCESS,
      payload: data,
    }),
    cacheSelector: getBatchIngredientByBatchId(batch_id),
  });

export const useAddBatchIngredient = () =>
  useApiMutate({
    requestFn: async (data: BatchIngredientsAddParams) => {
      const res: AxiosResponse<BatchIngredientsFetchResponseData> =
        await axios.post(
          `${process.env.REACT_APP_API_URL}/batch-ingredients`,
          data
        );

      return res.data.batchIngredients;
    },
    cacheActionCreator: (data: BatchIngredient) => ({
      type: BATCH_INGREDIENTS_ADD_SUCCESS,
      payload: data,
    }),
  });
