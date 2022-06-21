import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Data }) => {
  console.log("test", Data);
  const p = `/category/${Data.name}`;
  return (
    <Link to={p}>
      <div className="flex justify-center m-12 bg-white border-4 rounded-lg shadow-2xl h-72 hover:shadow-sm hover:border-emerald-300 hover:border-4">
        <div className="grid content-between py-2">
          <div>
            <img src={Data.imgUrl} alt="Company Logo" />
          </div>
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
            <div className="mt-5">
              {/* <Link className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              {" "}
              See More
            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
