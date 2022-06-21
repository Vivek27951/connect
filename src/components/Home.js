import React from "react";
import Navbar from "./Navbar";
import share from "../images/share.jpeg";
import { Link } from "react-router-dom";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <div className="grid min-h-screen grid-cols-2">
        <div className="flex flex-col justify-center p-10 ml-36">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-blue-600 text-7xl">CONNECT</span>
          </h1>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-600">
            Connecting <span>INDIA</span> to accelerate india
          </h2>
          <Link
            to={"/category"}
            className="w-24 p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            See More
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={share} className="w-96" />
          <p className="text-xl text-slate-700">Sharing is Caring</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
