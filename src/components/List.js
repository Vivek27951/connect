import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Data }) => {
  // console.log("test", Data);
  const p = `/connect/category/Vehicles/details`;
  const bg = Data.status ? "green" : "red";
  // console.log("bg", bg);
  return (
    <Link to={p}>
      <div className="flex justify-center m-12 bg-white border-4 rounded-lg shadow-2xl hover:shadow-sm hover:border-emerald-300 hover:border-4">
        <div className="grid content-between">
          <div
            className="w-4 p-2 rounded-full bottom-full"
            style={{ backgroundColor: bg }}
          ></div>
          <div>
            <img src={Data.img} alt="Company Logo" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h5 className="text-lg font-semibold text-slate-500">
                {Data.name}
              </h5>
              <p className="text-[#00d09c]">
                <span>&#8377;</span>
                {Data.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
