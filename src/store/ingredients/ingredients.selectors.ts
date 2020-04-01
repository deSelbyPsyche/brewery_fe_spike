import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { IngredientId } from "./ingredients.types";

export const getIngredients = (state: AppState) => state.ingredients;

export const getIngredientById = (id: IngredientId) =>
  createSelector(getIngredients, ingredients =>
    ingredients.find(ingredient => ingredient.ingredient_id === id)
  );
