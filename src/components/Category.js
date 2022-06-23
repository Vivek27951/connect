import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import CATEGORY from "../data/category";

const Category = () => {
  console.log("c", CATEGORY);
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center mt-5 text-4xl text-cyan-600">
        CATEGORY
      </h1>
      <div className="grid grid-cols-4 center">
        {CATEGORY.map((data) => (
          <Card Data={data} />
        ))}
      </div>
    </>
  );
};

export default Category;
