import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Data }) => {
  console.log("test", Data);
  const p = `/connnect/category/${Data.name}`;
  return (
    <Link
      to={p}
      className="flex justify-center p-5 m-12 bg-white border-4 rounded-lg shadow-2xl h-80 hover:shadow-sm hover:border-emerald-300 hover:border-4"
    >
      <div className="flex flex-col space-y-10">
        <div>
          <img src={Data.imgUrl} alt="Company Logo" />
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex flex-col items-center">
            <h5 className="text-lg font-semibold text-slate-500">
              {Data.name}
            </h5>
            <p className="text-[#00d09c]">
              {/* <span>&#8377;</span> */}
              {Data.total}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
