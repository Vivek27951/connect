import React from "react";
import Navbar from "./Navbar";

const ErrorPage = () => {
  let urlElements = window.location.href.split("/");
  return (
    <>
      <Navbar />
      <div className="flex justify-center text-6xl text-blue-700 mt-60">
        {urlElements[5]} page is in Progress ...
      </div>
    </>
  );
};

export default ErrorPage;
