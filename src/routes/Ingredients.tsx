import React from "react";

import { useFetchIngredients } from "../store/ingredients/ingredients.hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Ingredients: React.FC = () => {
  const { submit: fetchIngredients, data = [], error } = useFetchIngredients();

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      <ul>
        {data.map(ingredient => (
          <li key={`ingredients-ingredient-${ingredient.ingredient_id}`}>
            {ingredient.name}
          </li>
        ))}
      </ul>
      <Link to="/ingredients/add">Add Ingredient</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Ingredients;
