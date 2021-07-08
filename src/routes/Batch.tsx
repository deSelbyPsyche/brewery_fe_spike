import React, { useEffect, useState, FormEvent } from "react";
import { useSelector } from "react-redux";
import { getBatchById } from "../store/batches/batches.selectors";
import { useParams } from "react-router-dom";
import { getProductById } from "../store/products/products.selectors";
import {
  useFetchBatchIngredients,
  useAddBatchIngredient
} from "../store/batch-ingredients/batch-ingredients.hooks";
import { useFetchBatches } from "../store/batches/batches.hooks";
import { useFetchProducts } from "../store/products/products.hooks";
import { BatchIngredient } from "../store/batch-ingredients/batch-ingredients.types";
import { getIngredientById } from "../store/ingredients/ingredients.selectors";
import format from "date-fns/format";
import { useFetchIngredients } from "../store/ingredients/ingredients.hooks";
import IngredientSelect from "../components/IngredientSelect";
import { IngredientId } from "../store/ingredients/ingredients.types";
import { BatchId } from "../store/batches/batches.types";
import ingredients from "../store/ingredients/ingredients.reducer";

interface BatchIngredientListItemProps {
  batchIngredient: BatchIngredient;
}
const BatchIngredientListItem: React.FC<BatchIngredientListItemProps> = props => {
  const { batchIngredient } = props;
  const ingredient = useSelector(
    getIngredientById(batchIngredient.ingredient_id)
  );
  if (!ingredient) {
    return null;
  }

  return (
    <li>
      {ingredient.name} ({ingredient.type}), {batchIngredient.quantity_kg}
      {ingredient.unit}
    </li>
  );
};

interface AddBatchIngredientProps {
  batch_id: BatchId;
}
const AddBatchIngredient: React.FC<AddBatchIngredientProps> = props => {
  const { batch_id } = props;
  const [ingredientId, setIngredientId] = useState<IngredientId | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);

  const { submit: fetchBatchIngredients } = useFetchBatchIngredients(batch_id);
  const { submit: addBatchIngredient, status } = useAddBatchIngredient();

  const ingredient = useSelector(getIngredientById(ingredientId || -1));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (ingredientId && quantity) {
      addBatchIngredient({
        batch_id,
        ingredient_id: ingredientId,
        quantity_kg: quantity
      });
    }
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setIngredientId(undefined);
      setQuantity(undefined);
      fetchBatchIngredients();
    }
  }, [status]);
  return (
    <form onSubmit={onSubmit}>
      <IngredientSelect selected={ingredientId} onSelect={setIngredientId} />
      <input
        placeholder={`Quantity ${ingredient ? `(${ingredient.unit})` : ""}`}
        type="number"
        onChange={e => setQuantity(parseInt(e.target.value))}
        value={quantity || ""}
      />
    </form>
  );
};

const Batch: React.FC = () => {
  const params = useParams() as { batch_id: string };
  const batch_id = parseInt(params.batch_id);

  const batch = useSelector(getBatchById(batch_id));
  const product = useSelector(getProductById(batch ? batch.product_id : -1));
  const { submit: fetchIngredients } = useFetchIngredients();
  const { submit: fetchBatches } = useFetchBatches();
  const { submit: fetchProducts } = useFetchProducts();
  const {
    data: batchIngredients,
    submit: fetchBatchIngredients
  } = useFetchBatchIngredients(batch_id);

  useEffect(() => {
    fetchIngredients();
    fetchBatches();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (batch_id) {
      fetchBatchIngredients();
    }
  }, [batch_id]);

  if (!product || !batch || !batchIngredients) {
    return null;
  }

  return (
    <div>
      <h1>
        {product.name}{" "}
        {batch.brewday && format(new Date(batch.brewday), "dd/MM/yyyy")}
      </h1>
      <h2>Batch Ingredients</h2>
      <ul>
        {batchIngredients.map((batchIngredient, index) => {
          return (
            <BatchIngredientListItem
              key={`batch-batch-ingredients-${batchIngredient.ingredient_id}-${index}`}
              batchIngredient={batchIngredient}
            />
          );
        })}
      </ul>
      <h2>Add Ingredients</h2>
      <AddBatchIngredient batch_id={batch_id} />
    </div>
  );
};

export default Batch;
