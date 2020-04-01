import React, { useState, FormEvent, ChangeEvent } from "react";
import { Redirect } from "react-router-dom";

import ProductSelect from "../components/ProductSelect";
import { useAddBatch } from "../store/batches/batches.hooks";
import DatePicker from "../components/DatePicker";

const AddBatch: React.FC = () => {
  const {
    submit: addBatch,
    status,
    error: httpError,
    data: addedBatch
  } = useAddBatch();

  const [localError, setLocalError] = useState("");

  const [productId, setProductId] = useState<number | undefined>(undefined);
  const [brewday, setBrewday] = useState<Date>(new Date());

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!productId) {
      return setLocalError("You must select a Product");
    }
    if (!brewday) {
      return setLocalError("You must set the brew day");
    }

    addBatch({ product_id: productId, brewday: brewday.toISOString() });
  };

  if (status === "SUCCESS" && addedBatch) {
    return <Redirect to={`/batches/${addedBatch.batch_id}`} />;
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <ProductSelect onSelect={setProductId} selected={productId} />
        <DatePicker
          type="date"
          onDateSelect={setBrewday}
          selectedDate={brewday}
        />
        <button type="submit" disabled={status === "LOADING"}>
          Add Batch
        </button>
        {localError && <p>{localError}</p>}
        {httpError && <p>{httpError}</p>}
      </form>
    </div>
  );
};

export default AddBatch;
