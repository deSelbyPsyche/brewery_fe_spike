import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { DeliveryId } from "./deliveries.types";

export const getDeliveries = (state: AppState) => state.deliveries;

export const getDeliveryById = (id: DeliveryId) =>
  createSelector(getDeliveries, deliveries =>
    deliveries.find(delivery => delivery.delivery_id === id)
  );
