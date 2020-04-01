import React, { useEffect, HTMLProps, useCallback, ChangeEvent } from "react";

import { useFetchIngredientTypes } from "../store/ingredient-types/ingredient-types.hooks";
import { IngredientTypeId } from "../store/ingredient-types/ingredient-types.types";

interface IngredientTypeSelectProps
  extends Omit<
    HTMLProps<HTMLSelectElement>,
    "value" | "onChange" | "onSelect" | "selected"
  > {
  selected: IngredientTypeId | undefined;
  onSelect: (ingredientTypeId: IngredientTypeId | undefined) => void;
}

const IngredientTypeSelect: React.FC<IngredientTypeSelectProps> = props => {
  const { selected, onSelect, ...selectProps } = props;

  const {
    submit: fetchIngredientTypes,
    data: ingredientTypes = []
  } = useFetchIngredientTypes();

  useEffect(() => {
    fetchIngredientTypes();
  }, []);

  const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value || isNaN(parseInt(e.target.value))) {
      onSelect(undefined);
    } else {
      onSelect(parseInt(e.target.value));
    }
  }, []);

  return (
    <select {...selectProps} value={selected} onChange={onChange}>
      <option value={undefined}>Ingredient Type</option>
      {ingredientTypes.map(ingredientType => (
        <option
          value={ingredientType.ingredients_type_id}
          key={`ingredientType-select-${ingredientType.ingredients_type_id}`}
        >
          {ingredientType.name}
        </option>
      ))}
    </select>
  );
};

export default IngredientTypeSelect;
