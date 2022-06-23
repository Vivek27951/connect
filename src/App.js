import React from "react";
import Home from "./components/Home";
import Category from "../src/components/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vehicles from "../src/components/Vehicle";
import Details from "../src/components/Details";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/connnect" exact element={<Home />} />
          <Route path="/connnect/category" exact element={<Category />} />
          <Route
            path="/connnect/category/Vehicles"
            exact
            element={<Vehicles />}
          />
          <Route
            path="/connnect/category/Vehicles/:id"
            exact
            element={<Details />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
