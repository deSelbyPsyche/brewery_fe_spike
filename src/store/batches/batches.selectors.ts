import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { BatchId } from "./batches.types";

export const getBatches = (state: AppState) => state.batches;

export const getBatchById = (id: BatchId) =>
  createSelector(getBatches, batches =>
    batches.find(batch => batch.batch_id === id)
  );
