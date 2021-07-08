// Entities

export type IngredientTypeId = number;

export interface IngredientType {
  ingredients_type_id: IngredientTypeId;
  name: string;
  unit: string;
}

// Action types

export const INGREDIENT_TYPES_FETCH_SUCCESS =
  "@@ingredient-types/FETCH_SUCCESS";
export const INGREDIENT_TYPES_ADD_SUCCESS = "@@ingredient-types/ADD_SUCCESS";

// IngredientTypes Api
export interface IngredientTypesFetchResponseData {
  ingredientTypes: IngredientType[];
}
export interface IngredientTypesAddParams extends IngredientType {}
export interface IngredientTypesAddResponseData {
  ingredientType: IngredientType;
}

// Actions

interface IngredientTypesFetchSuccess {
  type: typeof INGREDIENT_TYPES_FETCH_SUCCESS;
  payload: IngredientType[];
}

interface IngredientTypesAddSuccess {
  type: typeof INGREDIENT_TYPES_ADD_SUCCESS;
  payload: IngredientType;
}

export type IngredientTypesAction =
  | IngredientTypesFetchSuccess
  | IngredientTypesAddSuccess;

// Store types

export type IngredientTypesState = IngredientType[];
