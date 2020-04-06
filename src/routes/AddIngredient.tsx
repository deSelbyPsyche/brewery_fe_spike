import React, { useState, FormEvent } from "react";

import { useAddIngredient } from "../store/ingredients/ingredients.hooks";
import { Redirect } from "react-router-dom";
import IngredientTypeSelect from "../components/IngredientTypeSelect";
import { IngredientTypeId } from "../store/ingredient-types/ingredient-types.types";

const AddIngredient: React.FC = () => {
  const { submit: addIngredient, status, error } = useAddIngredient();

  const [name, setName] = useState("");
  const [ingredientTypeId, setIngredientTypeId] = useState<
    IngredientTypeId | undefined
  >(undefined);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !ingredientTypeId) {
      return;
    }
    addIngredient({ name, ingredients_type_id: ingredientTypeId });
  };

  if (status === "SUCCESS") {
    return <Redirect to="/ingredients" />;
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Ingredient name"
        />
        <IngredientTypeSelect
          selected={ingredientTypeId}
          onSelect={setIngredientTypeId}
        />

        <button type="submit" disabled={status === "LOADING"}>
          Add Ingredient
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddIngredient;
