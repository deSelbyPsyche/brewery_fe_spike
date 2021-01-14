import React from "react";

import { useFetchDeliveries } from "../store/deliveries/deliveries.hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Deliveries: React.FC = () => {
  const { submit: fetchDeliveries, data = [], error } = useFetchDeliveries();

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <div>
      <ul>
        {data.map(delivery => (
          <li key={`deliveries-delivery-${delivery.delivery_id}`}>{delivery.when_received}</li>
        ))}
      </ul>
      <Link to="/deliveries/add">Add Delivery</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Deliveries;
