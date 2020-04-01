import { AppAction } from "../rootReducer.js";

import {
  BatchIngredientsState,
  BATCH_INGREDIENTS_FETCH_SUCCESS
} from "./batch-ingredients.types";

const initialState: BatchIngredientsState = [];

const batchIngredients = (
  state = initialState,
  action: AppAction
): BatchIngredientsState => {
  switch (action.type) {
    case BATCH_INGREDIENTS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default batchIngredients;
