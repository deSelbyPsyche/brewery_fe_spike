import { AppAction } from "../rootReducer.js";

import { DeliveriesState, DELIVERIES_FETCH_SUCCESS } from "./deliveries.types";

const initialState: DeliveriesState = [];

const deliveries = (state = initialState, action: AppAction): DeliveriesState => {
  switch (action.type) {
    case DELIVERIES_FETCH_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default deliveries;
