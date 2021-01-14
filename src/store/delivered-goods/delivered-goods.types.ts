import { DeliveryId } from "../deliveries/deliveries.types";
import { IngredientId } from "../ingredients/ingredients.types";

// Entities

export type DeliveredGoodId = number;

export interface DeliveredGood {
  delivery_id: DeliveryId;
  ingredient_id: IngredientId;
  quantity_kg: number;
}

// Action types

export const DELIVERED_GOODS_FETCH_SUCCESS = "@@delivered-goods/FETCH_SUCCESS";
export const DELIVERED_GOODS_FETCH_BY_ID_SUCCESS = "@@delivered-goods/FETCH_BY_ID_SUCCESS";
export const DELIVERED_GOODS_ADD_SUCCESS = "@@delivered-goods/ADD_SUCCESS";

// Deliveries Api

export interface DeliveredGoodsFetchResponseData {
  deliveredGoods: DeliveredGood[];
}

export interface DeliveredGoodsAddParams {}

export interface DeliveredGoodsAddResponseData {
  delivery: DeliveredGood;
}

// Actions

interface DeliveredGoodsFetchSuccess {
  type: typeof DELIVERED_GOODS_FETCH_SUCCESS;
  payload: DeliveredGood[];
}

interface DeliveredGoodsAddSuccess {
  type: typeof DELIVERED_GOODS_ADD_SUCCESS;
  payload: DeliveredGoodsAddResponseData;
}

export type DeliveredGoodsAction = DeliveredGoodsFetchSuccess | DeliveredGoodsAddSuccess;

// State

export type DeliveredGoodsState = DeliveredGood[];