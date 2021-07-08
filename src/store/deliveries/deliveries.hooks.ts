import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  Delivery,
  DeliveriesFetchResponseData,
  DELIVERIES_FETCH_SUCCESS,
  DeliveriesAddParams,
  DeliveriesAddResponseData,
  DELIVERIES_ADD_SUCCESS
} from "./deliveries.types";
import { getDeliveries } from "./deliveries.selectors";

export const useFetchDeliveries = () =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<DeliveriesFetchResponseData> = await axios.get(
        `${process.env.REACT_APP_API_URL}/deliveries`
      );

      return res.data.deliveries;
    },
    cacheActionCreator: (data: Delivery[]) => ({
      type: DELIVERIES_FETCH_SUCCESS,
      payload: data
    }),
    cacheSelector: getDeliveries
  });

export const useAddDelivery = () =>
  useApiMutate({
    requestFn: async (data: DeliveriesAddParams) => {
      const res: AxiosResponse<DeliveriesFetchResponseData> = await axios.post(
        `${process.env.REACT_APP_API_URL}/deliveries`,
        data
      );

      return res.data.deliveries;
    },
    cacheActionCreator: (data: DeliveriesAddResponseData) => ({
      type: DELIVERIES_ADD_SUCCESS,
      payload: data
    })
  });
