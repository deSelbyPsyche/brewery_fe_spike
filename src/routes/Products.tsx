import React from "react";

import { useFetchProducts } from "../store/products/products.hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const { submit: fetchProducts, data = [], error } = useFetchProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {data.map(product => (
          <li key={`products-product-${product.product_id}`}>{product.name}</li>
        ))}
      </ul>
      <Link to="/products/add">Add Product</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Products;
