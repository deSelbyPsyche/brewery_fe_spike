import { AppAction } from "../rootReducer.js";

import {
  IngredientTypesState,
  INGREDIENT_TYPES_FETCH_SUCCESS
} from "./ingredient-types.types";

const initialState: IngredientTypesState = [];

const ingredients = (
  state = initialState,
  action: AppAction
): IngredientTypesState => {
  switch (action.type) {
    case INGREDIENT_TYPES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default ingredients;
