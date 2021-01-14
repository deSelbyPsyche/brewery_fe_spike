import { BatchId } from "../batches/batches.types";
import { IngredientId } from "../ingredients/ingredients.types";

// Entities

export type BatchIngredientId = number;

export interface BatchIngredient {
  batch_id: BatchId;
  ingredient_id: IngredientId;
  quantity_kg: number;
}

// Action types

export const BATCH_INGREDIENTS_FETCH_SUCCESS =
  "@@batch-ingredients/FETCH_SUCCESS";
export const BATCH_INGREDIENTS_ADD_SUCCESS = "@@batch-ingredients/ADD_SUCCESS";

// BatchIngredients Api
export interface BatchIngredientsFetchResponseData {
  batchIngredients: BatchIngredient[];
}
export interface BatchIngredientsAddParams extends BatchIngredient {}

export interface BatchIngredientsAddResponseData {
  product: BatchIngredient;
}

// Actions

interface BatchIngredientsFetchSuccess {
  type: typeof BATCH_INGREDIENTS_FETCH_SUCCESS;
  payload: BatchIngredient[];
}

interface BatchIngredientsAddSuccess {
  type: typeof BATCH_INGREDIENTS_ADD_SUCCESS;
  payload: BatchIngredient;
}

export type BatchIngredientsAction =
  | BatchIngredientsFetchSuccess
  | BatchIngredientsAddSuccess;

// Store types

export type BatchIngredientsState = BatchIngredient[];
