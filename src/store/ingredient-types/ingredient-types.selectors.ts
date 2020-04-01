import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { IngredientTypeId } from "./ingredient-types.types";

export const getIngredientTypes = (state: AppState) => state.ingredientTypes;

export const getIngredientTypeById = (id: IngredientTypeId) =>
  createSelector(getIngredientTypes, ingredientTypes =>
    ingredientTypes.find(
      ingredientType => ingredientType.ingredients_type_id === id
    )
  );
