import axios, { AxiosResponse } from "axios";

import { useApiFetch, useApiMutate } from "../api.hooks";
import {
  DELIVERED_GOODS_FETCH_SUCCESS,
  DeliveredGood,
  DeliveredGoodsFetchResponseData,
  DeliveredGoodsAddParams,
  DELIVERED_GOODS_ADD_SUCCESS,
} from "./delivered-goods.types";
import { DeliveryId } from "../deliveries/deliveries.types";
import { getDeliveredGoodsByDeliveryId } from "./delivered-goods.selector";

export const useFetchDeliveredGoods = (delivery_id: DeliveryId) =>
  useApiFetch({
    requestFn: async () => {
      const res: AxiosResponse<DeliveredGoodsFetchResponseData> =
        await axios.get(`${process.env.REACT_APP_API_URL}/delivered-goods`, {
          params: { delivery_id },
        });

      return res.data.deliveredGoods;
    },
    cacheActionCreator: (data: DeliveredGood[]) => ({
      type: DELIVERED_GOODS_FETCH_SUCCESS,
      payload: data,
    }),
    cacheSelector: getDeliveredGoodsByDeliveryId(delivery_id),
  });

export const useAddDeliveredGood = () =>
  useApiMutate({
    requestFn: async (data: DeliveredGoodsAddParams) => {
      const res: AxiosResponse<DeliveredGoodsFetchResponseData> =
        await axios.post(
          `${process.env.REACT_APP_API_URL}/delivered-goods`,
          data
        );

      return res.data.deliveredGoods;
    },
    cacheActionCreator: (data: DeliveredGood) => ({
      type: DELIVERED_GOODS_ADD_SUCCESS,
      payload: data,
    }),
  });
