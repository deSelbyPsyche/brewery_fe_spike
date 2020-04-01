import { IngredientTypeId } from "../ingredient-types/ingredient-types.types";

// Entities

export type IngredientId = number;

export interface Ingredient {
  ingredient_id: IngredientId;
  name: string;
  type: string;
  unit: string;
}

// Action types

export const INGREDIENTS_FETCH_SUCCESS = "@@ingredients/FETCH_SUCCESS";
export const INGREDIENTS_ADD_SUCCESS = "@@ingredients/ADD_SUCCESS";

// Ingredients Api
export interface IngredientsFetchResponseData {
  ingredients: Ingredient[];
}
export interface IngredientsAddParams {
  ingredients_type_id: IngredientTypeId;
  name: string;
}
export interface IngredientsAddResponseData {
  ingredient: Ingredient;
}

// Actions

interface IngredientsFetchSuccess {
  type: typeof INGREDIENTS_FETCH_SUCCESS;
  payload: Ingredient[];
}

interface IngredientsAddSuccess {
  type: typeof INGREDIENTS_ADD_SUCCESS;
  payload: Ingredient;
}

export type IngredientsAction = IngredientsFetchSuccess | IngredientsAddSuccess;

// Store types

export type IngredientsState = Ingredient[];
