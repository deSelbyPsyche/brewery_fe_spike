import React from "react";
import { Link } from "react-router-dom";

const LeftPanel: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/batches">Batches</Link>
        <Link to="/ingredients">Ingredients</Link>
      </nav>
    </div>
  );
};

export default LeftPanel;
