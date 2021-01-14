import React, { useState, FormEvent } from "react";

import { useAddProduct } from "../store/products/products.hooks";
import { Redirect } from "react-router-dom";

const AddProduct: React.FC = () => {
  const { submit, status, error } = useAddProduct();

  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    submit({ name });
  };

  if (status === "SUCCESS") {
    return <Redirect to="/products" />;
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Product name" />
        <button type="submit" disabled={status === "LOADING"}>
          Add Product
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
