// Entities

export type DeliveryId = number;

export interface Delivery {
  delivery_id: DeliveryId;
  when_received: Date;
  supplier_id: number;
}

// Action types

export const DELIVERIES_FETCH_SUCCESS = "@@deliveries/FETCH_SUCCESS";
export const DELIVERIES_FETCH_BY_ID_SUCCESS =
  "@@deliveries/FETCH_BY_ID_SUCCESS";
export const DELIVERIES_ADD_SUCCESS = "@@deliveries/ADD_SUCCESS";

// Deliveries Api

export interface DeliveriesFetchResponseData {
  deliveries: Delivery[];
}
export interface DeliveriesAddParams {
  when_received: Date;
  supplier_id: number;
}
export interface DeliveriesAddResponseData {
  delivery: Delivery;
}

// Actions

interface DeliveriesFetchSuccess {
  type: typeof DELIVERIES_FETCH_SUCCESS;
  payload: Delivery[];
}

interface DeliveriesAddSuccess {
  type: typeof DELIVERIES_ADD_SUCCESS;
  payload: DeliveriesAddResponseData;
}

export type DeliveriesAction = DeliveriesFetchSuccess | DeliveriesAddSuccess;

// State

export type DeliveriesState = Delivery[];
