// Entities

export type BatchId = number;

export interface Batch {
  batch_id: BatchId;
  product_id: number;
  brewday?: string;
  brewer?: string;
  bottling_day?: string;
  fermentation_volume?: number;
  final_gravity?: number;
  ph_in_package?: number;
  ambient_temperature?: number;
  strike_temperature?: number;
  mash_temperature?: number;
  mashin?: string;
  mash_ph?: number;
  mashout?: string;
  first_runnings?: number;
  sparge_temperature?: number;
  sparge_en?: string;
  last_runnings?: number;
  copper_volume_start?: number;
  boil_start?: string;
  boil_end?: string;
  hopstand_temperature?: number;
}

// Action types

export const BATCHES_FETCH_SUCCESS = "@@batches/FETCH_SUCCESS";
export const BATCHES_ADD_SUCCESS = "@@batches/ADD_SUCCESS";

// Batches Api
export interface BatchesFetchResponseData {
  batches: Batch[];
}
export interface BatchesAddParams extends Omit<Batch, "batch_id"> {}
export interface BatchesAddResponseData {
  batch: Batch;
}

// Actions

interface BatchesFetchSuccess {
  type: typeof BATCHES_FETCH_SUCCESS;
  payload: Batch[];
}

interface BatchesAddSuccess {
  type: typeof BATCHES_ADD_SUCCESS;
  payload: Batch;
}

export type BatchesAction = BatchesFetchSuccess | BatchesAddSuccess;

// Store types

export type BatchesState = Batch[];
