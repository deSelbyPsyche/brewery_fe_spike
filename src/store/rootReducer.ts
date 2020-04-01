import { combineReducers } from "redux";

import products from "./products/products.reducer";
import { ProductsState, ProductsAction } from "./products/products.types";

import batches from "./batches/batches.reducer";
import { BatchesState, BatchesAction } from "./batches/batches.types";

import ingredients from "./ingredients/ingredients.reducer";
import {
  IngredientsState,
  IngredientsAction
} from "./ingredients/ingredients.types";

import batchIngredients from "./batch-ingredients/batch-ingredients.reducer";
import {
  BatchIngredientsAction,
  BatchIngredientsState
} from "./batch-ingredients/batch-ingredients.types";

import ingredientTypes from "./ingredient-types/ingredient-types.reducer";
import {
  IngredientTypesAction,
  IngredientTypesState
} from "./ingredient-types/ingredient-types.types";

export type AppAction =
  | ProductsAction
  | BatchesAction
  | IngredientsAction
  | BatchIngredientsAction
  | IngredientTypesAction;

export type AppState = {
  products: ProductsState;
  batches: BatchesState;
  ingredients: IngredientsState;
  batchIngredients: BatchIngredientsState;
  ingredientTypes: IngredientTypesState;
};

const rootReducer = combineReducers<AppState, AppAction>({
  products,
  batches,
  ingredients,
  batchIngredients,
  ingredientTypes
});

export default rootReducer;
