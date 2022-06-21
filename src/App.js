import React from "react";
import Home from "./components/Home";
import Category from "../src/components/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehicles from "../src/components/Vehicle";
import Details from "../src/components/Details";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category" exact element={<Category />} />
          <Route path="/category/Vehicles" exact element={<Vehicles />} />
          <Route path="/category/Vehicles/:id" exact element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
