import React from "react";
import List from "./List";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import vehicles from "../data/vehicle";

const Vehicles = () => {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center mt-5 text-4xl text-cyan-600">
        <Link to={"/category"}>vehicles</Link>
      </h1>
      <div className="grid grid-cols-4 center">
        {vehicles.map((data) => (
          <List Data={data} />
        ))}
      </div>
    </>
  );
};

export default Vehicles;
