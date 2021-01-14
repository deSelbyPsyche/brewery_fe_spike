import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { BatchId } from "../batches/batches.types";

export const getBatchIngredients = (state: AppState) => state.batchIngredients;

export const getBatchIngredientByBatchId = (id: BatchId) =>
  createSelector(getBatchIngredients, batchIngredients =>
    batchIngredients.filter(batchIngredient => batchIngredient.batch_id === id)
  );
