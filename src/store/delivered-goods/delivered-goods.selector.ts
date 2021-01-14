import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { DeliveryId } from "../deliveries/deliveries.types";

export const getDeliveredGoods = (state: AppState) => state.deliveredGoods;

export const getDeliveredGoodsByDeliveryId = (id: DeliveryId) =>
  createSelector(getDeliveredGoods, deliveredGoods =>
    deliveredGoods.filter(deliveredGood => deliveredGood.delivery_id === id)
  );
