import { AppAction } from "../rootReducer.js";

import { BatchesState, BATCHES_FETCH_SUCCESS } from "./batches.types";

const initialState: BatchesState = [];

const batches = (
  state = initialState,
  action: AppAction
): BatchesState => {
  switch (action.type) {
    case BATCHES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default batches;
