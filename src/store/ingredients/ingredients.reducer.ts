import { AppAction } from "../rootReducer.js";

import { IngredientsState, INGREDIENTS_FETCH_SUCCESS } from "./ingredients.types";

const initialState: IngredientsState = [];

const ingredients = (
  state = initialState,
  action: AppAction
): IngredientsState => {
  switch (action.type) {
    case INGREDIENTS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default ingredients;
