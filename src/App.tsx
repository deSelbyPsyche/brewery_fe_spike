import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "./routes/Products";
import AddProduct from "./routes/AddProduct";
import Home from "./routes/Home";
import LeftPanel from "./components/LeftPanel";
import Batches from "./routes/Batches";
import AddBatch from "./routes/AddBatch";
import Ingredients from "./routes/Ingredients";
import AddIngredient from "./routes/AddIngredient";
import Batch from "./routes/Batch";
import Deliveries from "./routes/Deliveries";

function App() {
  return (
    <Router>
      <LeftPanel />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/add">
          <AddProduct />
        </Route>
        <Route exact path="/batches">
          <Batches />
        </Route>
        <Route exact path="/batches/add">
          <AddBatch />
        </Route>
        <Route exact path="/batches/:batch_id">
          <Batch />
        </Route>
        <Route exact path="/ingredients">
          <Ingredients />
        </Route>
        <Route exact path="/ingredients/add">
          <AddIngredient />
        </Route>
        <Route exact path="/deliveries">
          <Deliveries />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
