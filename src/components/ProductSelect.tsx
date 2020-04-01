import React, { useEffect, useCallback, ChangeEvent } from "react";

import { useFetchProducts } from "../store/products/products.hooks";
import { HTMLProps } from "react";
import { ProductId } from "../store/products/products.types";

interface ProductSelectProps
  extends Omit<
    HTMLProps<HTMLSelectElement>,
    "value" | "onChange" | "onSelect" | "selected"
  > {
  selected: ProductId | undefined;
  onSelect: (product: ProductId | undefined) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = props => {
  const { selected, onSelect, ...selectProps } = props;
  const { submit: fetchProducts, data: products = [] } = useFetchProducts();

  useEffect(() => {
    fetchProducts();
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
      <option value={undefined}>Select a Product</option>
      {products.map(product => (
        <option
          value={product.product_id}
          key={`product-select-${product.product_id}`}
        >
          {product.name}
        </option>
      ))}
    </select>
  );
};

export default ProductSelect;
