import React from "react";

import { useFetchBatches } from "../store/batches/batches.hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Batch } from "../store/batches/batches.types";
import { useFetchProducts } from "../store/products/products.hooks";
import { useSelector } from "react-redux";
import { getProductById } from "../store/products/products.selectors";

interface BatchListItemProps {
  batch: Batch;
}
const BatchListItem: React.FC<BatchListItemProps> = props => {
  const { batch } = props;
  const product = useSelector(getProductById(batch.product_id));

  return (
    <li>
      <div>
        <Link to={`/batches/${batch.batch_id}`}>id:{batch.batch_id}</Link>
      </div>
      <div>product_id:{batch.product_id}</div>
      <div>product_name:{product ? product.name : ""}</div>
      <div>brewday: {batch.brewday}</div>
    </li>
  );
};

const Batches: React.FC = () => {
  const { submit: fetchBatches, data = [], error } = useFetchBatches();
  const { submit: fetchProducts } = useFetchProducts();

  useEffect(() => {
    fetchProducts();
    fetchBatches();
  }, []);

  return (
    <div>
      <ul>
        {data.map(batch => (
          <BatchListItem
            batch={batch}
            key={`batches-batch-${batch.batch_id}`}
          />
        ))}
      </ul>
      <Link to="/batches/add">Add Batch</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Batches;
