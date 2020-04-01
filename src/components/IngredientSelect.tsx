import React, { useEffect, HTMLProps, useCallback, ChangeEvent } from "react";

import { useFetchIngredients } from "../store/ingredients/ingredients.hooks";
import { IngredientId } from "../store/ingredients/ingredients.types";

interface IngredientSelectProps
  extends Omit<
    HTMLProps<HTMLSelectElement>,
    "value" | "onChange" | "onSelect" | "selected"
  > {
  selected: IngredientId | undefined;
  onSelect: (ingredientId: IngredientId | undefined) => void;
}

const IngredientSelect: React.FC<IngredientSelectProps> = props => {
  const { selected, onSelect, ...selectProps } = props;

  const {
    submit: fetchIngredients,
    data: ingredients = []
  } = useFetchIngredients();

  useEffect(() => {
    fetchIngredients();
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value || isNaN(parseInt(e.target.value))) {
      onSelect(undefined);
    } else {
      onSelect(parseInt(e.target.value));
    }
  }, []);

  return (
    <select {...selectProps} value={selected || ""} onChange={onChange}>
      <option value={undefined}>Select an Ingredient</option>
      {ingredients.map(ingredient => (
        <option
          value={ingredient.ingredient_id}
          key={`ingredient-select-${ingredient.ingredient_id}`}
        >
          {ingredient.name} ({ingredient.type})
        </option>
      ))}
    </select>
  );
};

export default IngredientSelect;
