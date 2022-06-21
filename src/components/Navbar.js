import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around p-3 bg-blue-300">
        <div>
          {" "}
          <Link
            to={"/connect"}
            className="ml-10 text-2xl font-extrabold text-white hover:text-sky-600"
          >
            CONNECT
          </Link>
        </div>
        <div className="flex ml-10 text-xl text-white ">
          <div className="mx-2 hover:text-sky-600">RENT</div>
          <div className="flex mx-2 hover:text-sky-600">
            <div>CART</div>
            <img src={cart} className="mx-1 h-fix w-7 rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
