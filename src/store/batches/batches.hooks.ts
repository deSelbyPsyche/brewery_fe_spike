import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  BATCHES_FETCH_SUCCESS,
  Batch,
  BatchesFetchResponseData,
  BatchesAddParams,
  BATCHES_ADD_SUCCESS,
  BatchesAddResponseData
} from "./batches.types";

export const useFetchBatches = () =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<BatchesFetchResponseData> = await axios.get(
        `${process.env.REACT_APP_API_URL}/batches`
      );

      return res.data.batches;
    },
    cacheActionCreator: (data: Batch[]) => ({
      type: BATCHES_FETCH_SUCCESS,
      payload: data
    }),
    cacheSelector: state => state.batches
  });

export const useAddBatch = () =>
  useApiMutate({
    requestFn: async (data: BatchesAddParams) => {
      const res: AxiosResponse<BatchesAddResponseData> = await axios.post(
        `${process.env.REACT_APP_API_URL}/batches`,
        data
      );

      return res.data.batch;
    },
    cacheActionCreator: (data: Batch) => ({
      type: BATCHES_ADD_SUCCESS,
      payload: data
    })
  });
