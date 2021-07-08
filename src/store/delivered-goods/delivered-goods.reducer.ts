import { AppAction } from "../rootReducer.js";

import {
  DeliveredGoodsState,
  DELIVERED_GOODS_FETCH_SUCCESS
} from "./delivered-goods.types";

const initialState: DeliveredGoodsState = [];

const deliveredGoods = (
  state = initialState,
  action: AppAction
): DeliveredGoodsState => {
  switch (action.type) {
    case DELIVERED_GOODS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default deliveredGoods;